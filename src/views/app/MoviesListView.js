import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CustomStatusBar from '../../components/CustomStatusBar'
import MovieListItem from '../../components/MovieListItem'
import useMovies from '../../hooks/useMovies'

function MoviesListView () {
  const [movies] = useMovies()
  const navigation = useNavigation()

  return (
    <View style={ s.container }>
      <CustomStatusBar/>
      <FlatList
        data={movies}
        renderItem={({item}) => {
          return (
            <MovieListItem
              data={item}
              onPress={() => navigation.push('MovieDetails', item)}/>
          )
        }}
        keyExtractor={item => item.id}/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    
  }
})

export default MoviesListView
