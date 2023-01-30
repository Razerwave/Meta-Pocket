import React from 'react'
import { View, Text, Button } from 'react-native'
import { ButtonPrimary, CardBox, Screen, Stack, StyledText } from '../../components'
import { ROUTES } from '../../constants'

const TermsScreen = ({ navigation }) => {
  return (
    <Screen bottom={
      <Stack padding={16} spacing={16}>
        <ButtonPrimary title='Create Passcode' onPress={() => navigation.navigate(ROUTES.AUTH.CREATE_PASSWORD)} />
      </Stack>
    }>
      <Stack spacing={16} padding={16}>
        <CardBox>
          <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
            Protect your wallet.
          </StyledText>
        </CardBox>
        <CardBox>
          <StyledText>
            This extra layer of security prevents​ anyone with your phone from accessing​ your funds.
          </StyledText>
        </CardBox>
      </Stack>
    </Screen>
  )
}

export default TermsScreen
