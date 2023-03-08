import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const YourPlaylists = () => {

    return (
            <View style={styles.container}>
                
                <View style={styles.bannerContainer}>
                    <Image source={require('../assets/banner.png')} style={styles.banner}/>
                </View>
                
                <View style ={styles.playlistHeader}>
                    <Text style={styles.text}>Your Playlists</Text>
                </View>
                
                <View style={styles.playlistContainer}>
                    <Text style={styles.text}>Connecting you to the music you want to listen to</Text>
                    <Text style={styles.text}> Connect to your Spotify button</Text>
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
        //height: 280,
        //width: 410,
    },
    playlistContainer: {
        
    },
    playlistHeader: {
        flex: 1, 
        justifyContent: 'flex-start',
    }
});


export default YourPlaylists;
