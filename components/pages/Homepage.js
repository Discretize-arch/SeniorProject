import React from 'react'
import { StyleSheet, Text, View, Image, Button, StatusBar, Pressable } from 'react-native'
import { Context } from "../Spotify"

/**home screen displayed before authentification */
export const Homepage = ({ navigation }) => {

    const spotify = React.useContext(Context)

    // check authentification and move the next screen
    React.useEffect(() => {
        if (spotify.IsAuthenticated) {
            navigation.navigate('Your Playlists')
        }
    }, [spotify.IsAuthenticated])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#052224" />
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Connecting you to the music you want</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} 
                    onPress={spotify.Authenticate}>
                    <Text style={styles.buttonText}>login to spotify</Text>
                </Pressable>
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
        width: 300,
        justifyContent: 'center',
    },

    text: {
        color: '#a3e0dc',
        textAlign: 'center',
        fontSize: 24,
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        width: 170,
        height: 50,
        color: '#052224',
        borderWidth: 5,
        borderRadius: 50,
        borderColor: '#85C8C3',
        backgroundColor: '#85C8C3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: '#052224',
        textAlign: 'center',
        fontSize: 18,
    },

})

export const HomepageOptions = {
    title: 'Tremeloo',
    headerStyle: {
        backgroundColor: '#052224',
    },
    headerTintColor: '#a3e0dc',
    headerTitleStyle: {
        fontSize: 14,
    },
}
