//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './components/pages/Homepage.js';
import YourPlaylists from './components/pages/YourPlaylists.js';
import SongRecs from './components/pages/SongRecs.js';
import LogoHeader from './components/LogoHeader.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //container for navigating screens
    <NavigationContainer>
      {/*Stack containing each screen*/}
      <Stack.Navigator initialRouteName='Home'>

        {/*homepage screen navigation*/}
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{ 
            title: 'Tremeloo',
            headerStyle: {
              backgroundColor: '#052224',
            },
            headerTintColor: '#a3e0dc',
            headerTitleStyle: {
              fontSize: 14,
            },
          }}
        />

        {/*Your Playlists screen navigation*/}
        <Stack.Screen
          name="Your Playlists"
          component={YourPlaylists}
          options={{ 
            title: 'playlists',
            headerStyle: {
              backgroundColor: '#052224',
            },
            headerTintColor: '#a3e0dc',
            headerTitleStyle: {
              fontSize: 14,
            },
            headerTitle: (props) => <LogoHeader {...props} />
          }}
        />

        {/*Song Recommendations screen navigation*/}
        <Stack.Screen
          name="Song Recommendations"
          component={SongRecs}
          options={{ 
            title: 'song recommendations',
            headerStyle: {
              backgroundColor: '#052224',
            },
            headerTintColor: '#a3e0dc',
            headerTitleStyle: {
              fontSize: 14,
            },
            headerTitle: (props) => <LogoHeader {...props} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
