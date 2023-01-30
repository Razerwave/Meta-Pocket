import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, Switch, TextInput } from 'react-native'
import { ButtonPrimary, CardBox, Screen, Stack, StyledText } from '../../components'
import { useTheme } from 'styled-components'
import { ROUTES } from '../../constants'

const PasscodeResetScreen = ({ navigation }) => {
  const { fontColor } = useTheme()
  const [passcode, setPasscode] = useState('')

  useEffect(() => {
    if (passcode.length === 6) {
      navigation.navigate(ROUTES.SETTING.PASSCODE_RE_ENTER, { 'passcode': passcode });
    }
  }, [passcode])

  return (
    <Screen>
      <Stack padding={16} spacing={16}>
        <CardBox>
          <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
            Reset Passcode
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
            value={passcode}
            secureTextEntry={true}
            autoFocus={true}
            keyboardType="numeric"
            onChangeText={setPasscode}
            underlineColorAndroid="transparent"
          />
        </CardBox>
      </Stack>
    </Screen>
  )
}

export default PasscodeResetScreen
