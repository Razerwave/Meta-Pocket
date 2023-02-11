import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, Switch, TextInput } from 'react-native'
import { ButtonPrimary, CardBox, KeyBoardPasscode, LayoutScreen, Screen, Stack, StyledText, Title } from '../../components'
import { useTheme } from 'styled-components'
import { ROUTES } from '../../constants'
import { useAuth } from '../../context/AuthContext'

const ConfirmResetPasscode = ({ navigation, route }) => {
  const { fontColor } = useTheme()
  const [pass, setPass] = useState('')
  const { login } = useAuth()
  const passcode = route.params.passcode

  useEffect(() => {
    if (pass.length === 6) {
      if (pass === passcode) {
        login(passcode);
  
        navigation.navigate(ROUTES.HOME.SETTING);
      }
      else {
        Alert.alert('Passcode does not match')
      }
    }
  }, [pass])

  return (
    <LayoutScreen>
      <Stack marginTop={80} marginHorizontal={28} marginBottom={62} spacing={29}>
        <Title>
          Re-enter the Passcode
        </Title>
        <StyledText>
          Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.
        </StyledText>
      </Stack>

      <Stack alignItems="center">
        <KeyBoardPasscode value={pass} onChange={(v) => setPass(v)} />
      </Stack>
    </LayoutScreen>
  )
}

export default ConfirmResetPasscode
