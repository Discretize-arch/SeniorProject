import React from 'react'
import LogoHeader from '../LogoHeader'
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import { Context } from "../Spotify"

export const YourPlaylists = ({ navigation }) => {

    const spotify = React.useContext(Context)

    const playlistItemClick = (index) => {
        spotify.RefreshRecommendations(index)
        navigation.navigate('Song Recommendations', index)
    }

    return (
        <View style={styles.container}>

            <View style={styles.bannerContainer}>
                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.banner}
                />
            </View>

            <View style={styles.playlistHeader}>
                <Text style={styles.headerText}>Playlists</Text>
            </View>

            <View style={styles.playlistContainer}>
                <ScrollView style={styles.scrollView}>
                    {spotify.Playlists.map((playlist, index) => (
                    <View key={playlist.playlist.id} style={styles.playlistElement}>
                        <Image
                            source={{ uri: playlist.playlist.images[0].url }}
                            style={styles.playlistImage}
                        />
                        <Button style={styles.playlistButton}
                            title={playlist.playlist.name}
                            onPress={() => playlistItemClick(index)}
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
    },
    headerText: {
        color: '#a3e0dc',
        fontSize: 26,
    },

    playlistContainer: {
        flex: 1,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#a3e0dc',
    },

    playlistElement: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
    },

    playlistImage: {
        width: 35,
        height: 35,
        marginRight: 20,
        borderRadius: 5,
    },

    playlistButton: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#212f30',
    }
})

export const YourPlaylistsOptions = { 
    title: 'playlists',
    headerStyle: {
      backgroundColor: '#052224',
    },
    headerTintColor: '#a3e0dc',
    headerTitleStyle: {
      fontSize: 14,
    },
    headerTitle: (props) => <LogoHeader {...props} />
}
