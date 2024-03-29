import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

// platform essential (web)
WebBrowser.maybeCompleteAuthSession()

// redirect URI is platform specific, see expo.scheme in app.json
let redirectURI = makeRedirectUri({ preferLocalhost: true })

// initialize spotify wrapper info: https://github.com/JMPerez/spotify-web-api-js
import SpotifyWebApi from 'spotify-web-api-js';
let wrapper = new SpotifyWebApi();

// define endpoints
const endpoint = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
}

// define primary data types
interface UserPlaylist {
  playlist: SpotifyApi.PlaylistObjectSimplified
  tracks: SpotifyApi.PlaylistTrackObject[]
  recommendations: SpotifyApi.TrackObjectSimplified[]
}

/**
 * Setup react hooks and behaviors.
 * @returns An object of exported properties and functions for use in the front end.
 */
export function ConstructBackend() {

  // hook: code
  const [code, setCode] = React.useState("")

  // request authentication code
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'ecee50ecceb74aefba8e87075a2324ae',
      scopes: ['user-library-read', 'user-library-modify', 'playlist-read-private', 'playlist-modify-public', 'playlist-modify-private'],
      usePKCE: false, // Authorization Code Flow: allow fetch token after authorizationEndpoint
      redirectUri: redirectURI,
    },
    endpoint
  )

  // update code on response
  React.useEffect(() => {
    if (response?.type === 'success') {
      setCode(response.params["code"])
    }
  }, [response])

  // expose authentication
  const Authenticate = () => { promptAsync() }

  // hook: IsAuthenticated
  const [IsAuthenticated, setIsAuthenticated]: [boolean, any] = React.useState(false)

  // update IsAuthenticated on code
  React.useEffect(() => {
    if (code.length > 0) {
      setIsAuthenticated(true)
    }
  }, [code])

  // hook: tokens
  const [accessToken, setAccessToken] = React.useState("")
  const [refreshToken, setRefreshToken] = React.useState("") // currently unused

  // update tokens on code
  React.useEffect(() => {
    // construct url
    let url = `https://accounts.spotify.com/api/token`
      + `?grant_type=authorization_code`
      + `&redirect_uri=${redirectURI}`
      + `&code=${code}`

    // request access token
    fetch(url, {
      method: 'POST',
      headers: {
        "Authorization": "Basic ZWNlZTUwZWNjZWI3NGFlZmJhOGU4NzA3NWEyMzI0YWU6OGE3Njk5ZmMzYWRlNDk1YmEzNTNiZDJmNjQyMDg5MzM=",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: 'follow',
    })

      // parse response
      .then((response) => response.json())

      // save tokens
      .then((data) => {
        setAccessToken(data.access_token)
        setRefreshToken(data.refresh_token)
      });

  }, [code])

  // key data
  const [Playlists, setPlaylists]: [UserPlaylist[], (playlist: UserPlaylist[]) => void] = React.useState([])
  var AlreadyRecommended: string[] = []

  // initialize data on accessToken
  React.useEffect(() => {

    // invalid accessToken
    if (accessToken == "" || accessToken === undefined) return

    // transfer authentication
    wrapper.setAccessToken(accessToken)

    // initialize data
    LoadUserPlaylists()

  }, [accessToken])

  // request playlists
  function LoadUserPlaylists() {

    // get playlists
    wrapper.getUserPlaylists()

      // intialize Library
      .then((playlistsResponse) => {

        for (let playlist of playlistsResponse.items) {

          // get playlist tracks
          wrapper.getPlaylistTracks(playlist.id)

            // add it to tracks
            .then((tracksResponse) => {

              let updatedList = [...Playlists]

              Playlists.push({
                playlist: playlist,
                tracks: tracksResponse.items,
                recommendations: [],
              })
              
              // print updated list in console
              setPlaylists(updatedList)

              // log error
            }, (error) => { console.log(error) })

        }

        // log error
      }, (error) => { console.log(error) });

  }

  function RefreshRecommendations(playlistIndex: number) {

    // locate playlist
    let playlist = Playlists[playlistIndex]

    // get ids
    let identifiers = playlist.tracks.map((track, _, __) => track.track.id)

    // shuffle ids
    identifiers.sort((_, __) => 0.5 - Math.random())

    // define seeds
    var max = identifiers.length > 5 ? 5 : identifiers.length
    var seeds = identifiers.slice(0, max)

    // get some recommendations
    var options = { limit: 20, min_popularity: 40, seed_tracks: seeds }
    wrapper.getRecommendations(options)

      // on success
      .then((recommendationsResponse) => {

        // define final recommendation
        var recommendations: SpotifyApi.TrackObjectSimplified[] = []

        // for every track
        for (let recommended of recommendationsResponse.tracks) {

          // stop at 10 recs
          if (recommendations.length == 10) break

          // add it if it's unique
          if (AlreadyRecommended.includes(recommended.id) == false) {
            AlreadyRecommended.push(recommended.id)
            recommendations.push(recommended)
          }

        }

        // set data using a modified copy of the array
        var updatedPlaylists = Playlists.map((value, index, array) => {

          // skip non-selected
          if (index != playlistIndex) return value

          // create replacement
          var replacement: UserPlaylist = {
            playlist: value.playlist,
            tracks: value.tracks,
            recommendations: recommendations
          }

          return replacement

        })

        setPlaylists(updatedPlaylists)

        // log error
      }, (error) => { console.log(error) })

  }

  function AddTrack(playlistIndex: number, track: SpotifyApi.TrackObjectSimplified) {

    // locate playlist
    let playlist = Playlists[playlistIndex]

    // remove recommendation
    var updatedRecs = <SpotifyApi.TrackObjectSimplified[]>[]

    for (let rec of playlist.recommendations) {
      // skip added track
      if (rec.id == track.id) continue
      // add any other
      updatedRecs.push(rec)
    }
    
    // set data using a modified copy of the array
    var updatedPlaylists = Playlists.map((value, index, array) => {

      // skip non-selected
      if (index != playlistIndex) return value

      // create replacement
      var replacement: UserPlaylist = {
        playlist: value.playlist,
        tracks: value.tracks,
        recommendations: updatedRecs
      }

      return replacement

    })

    // update
    setPlaylists(updatedPlaylists)

    // add it to playlist
    wrapper.addTracksToPlaylist(playlist.playlist.id, [track.uri])

    .then((_) => {})

  }

  return {
    /** Prompt the user to authenticate using their web browser. */
    Authenticate,
    /** Reflects current authentication state of the user. */
    IsAuthenticated,
    /** An object representing the response from a request for the user's playlists. */
    Playlists,
    /** Refresh the recommendations for the selected playlist. */
    RefreshRecommendations,
    AddTrack
  }
}

const DefaultBackendState = {
  Authenticate: () => {},
  IsAuthenticated: false,
  Playlists: <UserPlaylist[]>[],
  RefreshRecommendations: (playlistIndex: number) => {},
  AddTrack: (playlistIndex: number, track: SpotifyApi.TrackObjectSimplified) => {}
}

export const Context = React.createContext(DefaultBackendState)
