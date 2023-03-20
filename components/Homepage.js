import React from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar } from 'react-native';
import ConstructBackEnd from './Spotify';


const Homepage = ({ navigation }) => {
    
    return (
        // add my logo to the top of the page around here
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#052224" />
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Connecting you to the music you want</Text>
            </View>

            <View style={styles.textContainer}>
                <Button
                    title="Login to Spotify"
                    onPress={() => navigation.navigate('Your Playlists')}
                    backgroundColor = '#a3e0dc'
                />
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

    logoContainer: {
        flex: 1,
        flexShrink: 1 / 2,
    },

    logo: {
        width: 400,
        height: 270,
    },

    textContainer: {
        flex: 1 / 2,
        justifyContent: 'center',
    },

    text: {
        color: '#a3e0dc',
        textAlign: 'center',
        fontSize: 18, 
    },

    buttonContainer: {
        flex: 1,
    },
});


export default Homepage;
