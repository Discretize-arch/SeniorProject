
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

import user from './user.json';
let text = user;
const userData = (user)


const YourPlaylists = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={styles.bannerContainer}>
                <Image
                    source={require('../assets/banner.png')}
                    style={styles.banner}
                />
            </View>

            <View style={styles.playlistHeader}>

                <Text
                    style={styles.headerText}>
                    {userData.name}'s Playlists
                </Text>
            </View>

            <View style={styles.playlistContainer}>
                <ScrollView style={styles.scrollView}>
                    {<View style={styles.playlistElement}>

                        <Image 
                            source={{uri: "https://i.scdn.co/image/ab67706c0000bebbb962eef678e0ac47a0aaf1ab"}}
                            style={styles.playlistImage}
                        />

                        <Button style={styles.playlistButton}
                            title={userData.library[0].name}
                            onPress={() => navigation.navigate('Song Recommendations')}
                        />
                    </View>}
                </ScrollView>
            </View>
        </View>
    );
}


function makeList() {
    let x = 0;
    while (x < userData.library.length) {
        <View style={styles.playlistElement}>
            
            <View style={styles.pImageContainer}>
                <img source={{uri: userData.library[x].image}} style={styles.playlistImage} />
            </View>

            <Button style={styles.playlistButton}
                title={userData.library.name}
                onPress={() => navigation.navigate('Song Recommendations')}
            />
        </View>
    }
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
        padding: 5, 
    },

    pImageContainer: {
        flex: 1/8,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        alignContent: 'center',
    },

    playlistImage: {
        width: 30,
        height: 30,
        marginRight: 20,
        marginTop: 3,
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
