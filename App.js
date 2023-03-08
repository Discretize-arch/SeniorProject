import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './components/Homepage.js';
import YourPlaylists from './components/YourPlaylists.js';
import SongRecs from './components/SongRecs.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Your Playlists'>
        <Stack.Screen
          name="Home"
          component={Homepage}
        />
        <Stack.Screen
          name="Your Playlists"
          component={YourPlaylists}
          options={{title: 'Playlists'}}
          
        />
        <Stack.Screen
          name="Song Recommendations"
          component={SongRecs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
