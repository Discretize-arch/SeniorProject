import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

const SongRecs = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={styles.bannerContainer}>
                <Image source={require('../assets/banner.png')} style={styles.banner} />
            </View>

            <View style={styles.playlistHeader}>
                <Text style={styles.headerText}>Recommended Songs</Text>
            </View>

            <View style={styles.songContainer}>
                <Text style={styles.text}>Song list goes here</Text>
                
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.playlistElements}>
                        <Text style={styles.playlistImage}>
                            artist image
                        </Text>

                        <Text style={styles.songName}>
                            Song Name Here
                        </Text>

                        <Button style={styles.songButton}
                            title='Add to Playlist'
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
        justifyContent: 'flex-start',
    },
    headerText: {
        color: '#a3e0dc',
        fontSize: 26,
    },

    songContainer: {
        flex: 1,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#a3e0dc',
    },

    playlistElements: {
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
    songName: {
        flex: 1 / 2,
        textAlignVertical: 'center',
        color: '#fff',

    }
});

export default SongRecs;
