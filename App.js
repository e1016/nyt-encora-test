import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppStack from './src/views/app'

function App () {
  return (
    <AppStack/>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
