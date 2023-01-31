import React from 'react'
import { View, Text } from 'react-native'
import { Screen, Stack, StyledText } from '../../components'

const DappScreen = () => {
  return (
    <Screen>
      <Stack spacing={16} padding={16}>
        <StyledText>DappScreen</StyledText>
      </Stack>
    </Screen>
  )
}

export default DappScreen
