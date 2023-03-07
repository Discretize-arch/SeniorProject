import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
// import { NativeBaseProvider, Button } from "native-base";

const Homepage = () => {

    return (
        // add my logo to the top of the page around here
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
                <Text style={styles.text}>Tremeloo</Text>
                <Text style={styles.text}>Connecting you to the music you want to listen to</Text>
                <Button
                    title="Login to Spotify"
                    onPress={() => Alert.alert('Button pressed')}
                />
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
    logo: {
        width: 350,
        height: 220,
        marginBottom: 20
    },
});


export default Homepage;
