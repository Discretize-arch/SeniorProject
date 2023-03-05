import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "native-base";

// getting a weird ts error here, import when fixed

const Homepage = () => {

    return (
        // add my logo to the top of the page around here
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                // put this at the top of the page

            />
            <Text style={styles.text}>Tremeloo</Text>
            <Text style={styles.text}>Connecting you to the music you want to listen to</Text>
            <Button onPress={() => console.log("Login to Spotify")}>Login to Spotify</Button>
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
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
});


export default Homepage;
