import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const LogoHeader = () => {
    return (
        <View style={styles.logoContainer}>
            <Image
                style={styles.image}
                source={require('../assets/logo.png')}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1
        
    },
    image: {
        flexShrink: 1,
        width: 80,
        height: 50,
    },

});

export default LogoHeader;