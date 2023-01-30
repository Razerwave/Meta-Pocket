import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, Switch, TextInput } from 'react-native'
import { ButtonPrimary, Screen, StyledText } from '../../components'
import { useThemeChange } from '../../context/ThemeChangeContext'
import { useTheme } from 'styled-components'
import { ROUTES } from '../../constants'
import useAuth from '../../context/AuthContext'
import { useRoute } from '@react-navigation/native'

const PasscodeReEnterScreen = ({ navigation, route }) => {
  const { activeTintColor } = useTheme()
  const { theme, toggleTheme } = useThemeChange()
  const isEnabled = theme === "dark"

  const [passcode, setPasscode] = useState('')
  const {setPassword} = useAuth()
  const passcodePrev = route.params.passcode

  useEffect(() => {
    if (passcode === passcodePrev) {
      setPassword(passcode)
      navigation.navigate(ROUTES.SETTING.BASE);
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

export default PasscodeReEnterScreen
