import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, Alert, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ROUTES } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import { LayoutScreen, CardBox, KeyBoardNumeric, Screen, Stack, StyledText, Title } from '../../components';
import { useTheme } from 'styled-components'

const ConfirmPasscode = ({ route }) => {
  const [passcode, setPasscode] = useState('');
  const { fontColor } = useTheme()
  const { login } = useAuth();

  handleChange = (num) => {
    setPasscode(s => s.length < 6 ? s + num : s)
  }
  const paramPasscode = route.params.passcode

  useEffect(() => {
    if (passcode.length === 6) {
      if (passcode === paramPasscode) {
        login(passcode)
      }
      else {
        Alert.alert('Passcode does not match')
      }
    }
  }, [passcode]);

  return (
    <LayoutScreen>
      <Stack padding={28} spacing={29}>
        <Title>
          Confirm Passcode
        </Title>
        <StyledText>
          Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet. {paramPasscode}  {passcode}
        </StyledText>
      </Stack>

      <Stack padding={50} spacing={50}>
        <Stack direction="row" alignItems="center" spacing={16} style={{ justifyContent: 'center' }}>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <View key={index} style={{ width: 10, height: 10, borderWidth: 1, borderStyle: 'solid', borderColor: fontColor, borderRadius: 9999, backgroundColor: index < passcode.length ? fontColor : 'transparent' }} />
          ))}
        </Stack>

        <KeyBoardNumeric onNumber={(num) => handleChange(num)} onReset={() => setPasscode('')} onDelete={() => setPasscode(s => s.slice(0, -1))} />
      </Stack>
    </LayoutScreen>
  )
}

export default ConfirmPasscode
