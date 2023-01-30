import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ButtonPrimary, Screen, Stack, StyledText } from '../../components'

const MiningInfoScreen = () => {
  return (
    <Screen bottom={
      <Stack padding={16} spacing={16}>
        <ButtonPrimary title='OK' />
      </Stack>
    }>
    </Screen>
  )
}

export default MiningInfoScreen
