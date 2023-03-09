
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

const YourPlaylists = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={styles.bannerContainer}>
                <Image source={require('../assets/banner.png')} style={styles.banner} />
            </View>

            <View style={styles.playlistHeader}>
                <Text style={styles.headerText}>Your Playlists</Text>
            </View>

            <View style={styles.playlistContainer}>
                <ScrollView style={styles.scrollView}>     
                    <View style={styles.playlistElement}>
                        <Text style={styles.playlistImage}>
                            playlist image
                        </Text>

                        <Button style={styles.playlistButton}
                            title='playlist Name'
                            onPress={() => navigation.navigate('Song Recommendations')}
                        />
                    </View>
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
        flexDirection: 'row',
    },
    playlistImage: {
        flex: 1 / 2,
        color: '#fff',
        justifyContent: 'center',
        textAlignVertical: 'center',
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
