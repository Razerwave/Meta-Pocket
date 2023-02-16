import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BTCHistoryScreen = ({ route }) => {
  const item = route.params.item;

  return (
    <View>
      <Text>{item.type} : {item.amount}</Text>
    </View>
  )
}

export default BTCHistoryScreen

const styles = StyleSheet.create({})