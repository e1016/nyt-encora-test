import React from 'react'
import { StatusBar } from 'react-native'
import colors from '../utils/colors'

function CustomStatusBar () {
  return (
    <StatusBar backgroundColor={colors.BG} barStyle="dark-content"/>
  )
}

export default CustomStatusBar
