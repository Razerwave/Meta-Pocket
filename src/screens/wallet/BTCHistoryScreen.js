import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const BTCHistoryScreen = ({ route, navigation }) => {
  const item = route.params.item;

  useEffect(() => {
    navigation.setOptions({ title: `${item.type} Money`})
  }, [item.type])

  return (
    <View>
      <Text>{item.type} : {item.amount}</Text>
    </View>
  )
}

export default BTCHistoryScreen

const styles = StyleSheet.create({})