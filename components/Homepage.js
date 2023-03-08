import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
// import { NativeBaseProvider, Button } from "native-base";

const Homepage = (navigation) => {

    return (
        // add my logo to the top of the page around here
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Tremeloo</Text>
                <Text style={styles.text}>Connecting you to the music you want to listen to</Text>
            </View>

            <View style={styles.textContainer}>
                <Button
                    title="Login to Spotify"
                    onPress={() => alert('button pressed')}
                />
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
    },

    buttonContainer: {
        flex: 1,
    },
});


export default Homepage;
