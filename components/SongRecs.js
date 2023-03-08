import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SongRecs = () => {

    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Image source={require('../assets/banner.png')} style={styles.logo} />
            </View>


            <Text style={styles.text}>Tremeloo</Text>
            <Text style={styles.text}>Connecting you to the music you want to listen to</Text>
            <Text style={styles.text}> Connect to your Spotify button</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default SongRecs;
