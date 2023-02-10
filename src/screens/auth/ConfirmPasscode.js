import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, Alert, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ROUTES } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import { LayoutScreen, CardBox, KeyBoardNumeric, Screen, Stack, StyledText, Title, StepsAuth, KeyBoardPasscode } from '../../components';
import { useTheme } from 'styled-components'

const ConfirmPasscode = ({ route, navigation }) => {
  const [passcode, setPasscode] = useState('');

  handleChange = (num) => {
    setPasscode(s => s.length < 6 ? s + num : s)
  }
  const paramPasscode = route.params.passcode

  useEffect(() => {
    if (passcode.length === 6) {
      if (passcode === paramPasscode) {
        navigation.navigate(ROUTES.AUTH.RESULT, { 'passcode': passcode });
      }
      else {
        Alert.alert('Passcode does not match')
      }
    }
  }, [passcode]);

  return (
    <LayoutScreen>
      <StepsAuth current={5} />
      <Stack marginTop={80} marginHorizontal={28} marginBottom={62} spacing={29}>
        <Title>
          Confirm Passcode
        </Title>
        <StyledText>
          Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.
        </StyledText>
      </Stack>

      <Stack alignItems="center">
        <KeyBoardPasscode value={passcode} onChange={(v) => setPasscode(v)} />
      </Stack>
    </LayoutScreen>
  )
}

export default ConfirmPasscode
