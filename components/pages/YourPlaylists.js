
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import User from '../user.json';
import ConstructBackend from '../Spotify';

const YourPlaylists = ({ navigation }) => {
    const playlists = ConstructBackend().Playlists;
    return (
        <View style={styles.container}>

            <View style={styles.bannerContainer}>
                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.banner}
                />
            </View>

            <View style={styles.playlistHeader}>

                <Text
                    style={styles.headerText}>
                    { }'s Playlists
                </Text>
            </View>

            <View style={styles.playlistContainer}>
                <ScrollView style={styles.scrollView}>
                    {playlists.map((playlist, key) => (<View style={styles.playlistElement}>

                        <Image
                            source={{ uri: playlist.playlist.images.map((image) => (image.url)) }}
                            style={styles.playlistImage}
                        />

                        <Button style={styles.playlistButton}
                            title={playlist.playlist.name}
                            onPress={() => navigation.navigate('Song Recommendations')}
                        />
                    </View>))}
                </ScrollView>
            </View>
        </View>
    );
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
});

export default YourPlaylists;
