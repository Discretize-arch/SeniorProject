import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// getting a weird ts error here, import when fixed
// import tremeloo-logo from '../assets/tremeloo-logo.png';

const Homepage = () => {
    return (
        // add my logo to the top of the page around here
        <View style={styles.container}>
            <Text style={styles.text}>Connecting you to the music you want to hear</Text>
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
    }
});


export default Homepage;
