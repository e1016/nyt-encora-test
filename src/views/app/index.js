import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// app views
import MoviesListView from './MoviesListView'
import MovieDetailsView from './MovieDetailsView'
import MovieReaderWebView from './MovieReaderWebView'

// auth views
// [...]

const Stack = createNativeStackNavigator();

export default function AppStack () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MoviesList" component={MoviesListView} options={{ title: 'Movies' }}/>
        <Stack.Screen name="MovieDetails" component={MovieDetailsView} />
        <Stack.Screen name="MovieReaderWeb" component={MovieReaderWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}