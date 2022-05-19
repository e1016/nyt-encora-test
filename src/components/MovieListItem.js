import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import colors from '../utils/colors'

function MovieListItem ({ data: { display_title, headline, publication_date, multimedia }, ...props}) {
  return (
    <TouchableOpacity style={ s.touchable } activeOpacity={0.8} {...props}>
      <View style={s.flexRow}>
        <View>
          <Image source={{uri: multimedia.src}} style={s.cover}/>
        </View>
        <View style={s.movieResume}>
          <Text style={s.title} numberOfLines={1} ellipsizeMode='tail'>{ display_title }</Text>
          <Text style={s.headline} numberOfLines={1} ellipsizeMode='tail'>{ headline }</Text>
          <Text style={s.publicationDate } numberOfLines={1} ellipsizeMode='tail'>{ publication_date }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  touchable: {

  },
  cover: {
    width: 130,
    height: 100
  },
  title: {
    fontSize: 19,
    color: colors.TEXT
  },
  headline: {
    fontSize: 14,
    color: colors.TEXT
  },
  publicationDate: {
    fontSize: 10,
    color: colors.SECONDARY_TEXT
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.BG
  },
  movieResume: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 10,
    flex: 1
  }
})

export default MovieListItem
