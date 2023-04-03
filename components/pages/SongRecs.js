import React from 'react'
import LogoHeader from '../LogoHeader'
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import { Context } from "../Spotify"

export const SongRecs = ({ navigation, route }) => {

    const spotify = React.useContext(Context)

    const songItemClick = (song) => {
        console.log(`${song.name} was clicked`)
    }

    return (
        <View style={styles.container}>

            <View style={styles.bannerContainer}>
                <Image source={require('../../assets/banner.png')} style={styles.banner} />
            </View>

            <View style={styles.playlistHeader}>
                <Text style={styles.headerText}>Recommended Songs</Text>
            </View>

            <View style={styles.songContainer}>
                <ScrollView style={styles.scrollView}>  
                    {spotify.Playlists[route.params].recommendations.map((song, index) => (
                    <View key={song.id} style={styles.songElements}>
                        <Text style={styles.songName}>{song.artists[0].name} : {song.name}</Text>

                        <Button style={styles.songButton}
                            title='Add to Playlist'
                            onPress={() => songItemClick(song)}
                        />
                    </View>))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#052224',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#a3e0dc',
    },
    bannerContainer: {
        flex: 1,
    },
    banner: {
        flexShrink: 1,
        flexGrow: 1,
    },

    playlistHeader: {
        flex: 1 / 8,
        justifyContent: 'flex-start',
    },
    headerText: {
        color: '#a3e0dc',
        fontSize: 26,
    },

    songContainer: {
        flex: 1,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#a3e0dc',
    },

    scrollView:{
        backgroundColor: '#212f30',
    },

    songElements: {
        flexDirection: 'row',
        margin: 5,
    },
    playlistImage: {
        flex: 1 / 2,
        color: '#fff',
        justifyContent: 'center',
        textAlignVertical: 'center',
    },

    playlistButton: {
        flex: 1/2,
    },
    songName: {
        flex: 1,
        textAlignVertical: 'center',
        color: '#fff',
    }
})

export const SongRecsOptions = { 
    title: 'song recommendations',
    headerStyle: {
      backgroundColor: '#052224',
    },
    headerTintColor: '#a3e0dc',
    headerTitleStyle: {
      fontSize: 14,
    },
    headerTitle: (props) => <LogoHeader {...props} />
}
