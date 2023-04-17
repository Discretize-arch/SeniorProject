import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Homepage, HomepageOptions } from './components/pages/Homepage.js'
import { YourPlaylists, YourPlaylistsOptions} from './components/pages/YourPlaylists.js'
import { SongRecs, SongRecsOptions } from './components/pages/SongRecs.js'

import { ConstructBackend, Context } from './components/Spotify'

export default function App() {

  const Backend = ConstructBackend()
  const Stack = createNativeStackNavigator()

  return (
    <Context.Provider value={Backend}>

      {/*container for navigating screens*/}
      <NavigationContainer>

        {/*Stack containing each screen*/}
        <Stack.Navigator initialRouteName='Home'>

          {/*homepage screen navigation*/}
          <Stack.Screen name="Home" component={Homepage} options={HomepageOptions}/>

          {/*Your Playlists screen navigation*/}
          <Stack.Screen name="Your Playlists" component={YourPlaylists} options={YourPlaylistsOptions}/>

          {/*Song Recommendations screen navigation*/}
          <Stack.Screen name="Song Recommendations" component={SongRecs} options={SongRecsOptions}/>

        </Stack.Navigator>
      </NavigationContainer>

    </Context.Provider>
  )
}
