import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, Switch, TextInput } from 'react-native'
import { ButtonPrimary, Screen, StyledText } from '../../components'
import { useThemeChange } from '../../context/ThemeChangeContext'
import { useTheme } from 'styled-components'
import { ROUTES } from '../../constants'

const PasscodeResetScreen = ({ navigation }) => {
  const { activeTintColor } = useTheme()
  const { theme, toggleTheme } = useThemeChange()
  const isEnabled = theme === "dark"

  const [passcode, setPasscode] = useState('')

  useEffect(() => {
    if (passcode.length === 6) {
      navigation.navigate(ROUTES.SETTING.PASSCODE_RE_ENTER, {'passcode': passcode});
    }
  }, [passcode])

  return (
    <Screen>
      <StyledText>
        Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.
      </StyledText>
      <TextInput
        placeholder="Enter password"
        value={passcode}
        secureTextEntry={true}
        autoFocus={true}
        numberOfLines={4}
        keyboardType="numeric"
        onChangeText={setPasscode}
        underlineColorAndroid="transparent"
      />
    </Screen>
  )
}

export default PasscodeResetScreen
