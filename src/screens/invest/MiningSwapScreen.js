import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ButtonPrimary, CircleAnimated, Screen, Stack, StyledText } from '../../components'

const MiningSwapScreen = () => {
  return (
    <Screen bottom={
      <Stack padding={16} spacing={16}>
        <ButtonPrimary title='Exchange' onPress={() => { }} />
      </Stack>
    }>

      <View style={{ alignItems: 'center' }}>
        <CircleAnimated size={150}>
          <StyledText>Total value</StyledText>
          <StyledText>$12.345</StyledText>
        </CircleAnimated>
      </View>
    </Screen>
  )
}

export default MiningSwapScreen
