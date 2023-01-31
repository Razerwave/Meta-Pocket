import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, Switch, TextInput } from 'react-native'
import { ButtonPrimary, CardBox, Screen, Stack, StyledText } from '../../components'
import { useTheme } from 'styled-components'
import { ROUTES } from '../../constants'
import {useAuth} from '../../context/AuthContext'

const PasscodeReEnterScreen = ({ navigation, route }) => {
  const { fontColor } = useTheme()
  const [pass, setPass] = useState('')
  const { Login } = useAuth()
  const passcode = route.params.passcode

  useEffect(() => {
    if (pass === passcode) {
      Login(passcode);
      
      navigation.navigate(ROUTES.HOME.SETTING);
    }
  }, [pass])

  return (
    <Screen>
      <Stack padding={16} spacing={16}>
        <CardBox>
          <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
            Re-enter the Passcode
          </StyledText>
        </CardBox>
        <CardBox>
          <StyledText>
            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.
          </StyledText>
        </CardBox>
        <CardBox>
          <TextInput
            style={{ color: fontColor }}
            placeholderTextColor="gray"
            placeholder="Enter Passcode"
            value={pass}
            secureTextEntry={true}
            autoFocus={true}
            keyboardType="numeric"
            onChangeText={setPass}
            underlineColorAndroid="transparent"
          />
        </CardBox>
      </Stack>
    </Screen>
  )
}

export default PasscodeReEnterScreen
