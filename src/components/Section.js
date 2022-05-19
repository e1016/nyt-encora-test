import React from 'react'
import { View, StyleSheet } from 'react-native'

function Section (props) {
  return (
    <View style={ s.container }>
      { props.children }
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  }
})

export default Section
