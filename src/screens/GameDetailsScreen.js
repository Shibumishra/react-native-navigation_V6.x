import { View, Text } from 'react-native'
import React from 'react'

const GameDetailsScreen = ({navigation, route}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Game Details Screen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default GameDetailsScreen