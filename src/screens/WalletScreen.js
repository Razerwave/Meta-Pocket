import React, { useState } from 'react'
import {View, Text, Button, Alert, StyleSheet} from 'react-native'

const WalletScreen = () => {
  return (
    <View>
      <Text>WalletScreen</Text>
      <Button title='bnttn' onPress={() => console.log("daraglaa")}/>
    </View>
  )
}

export default WalletScreen
