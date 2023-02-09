import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Alert, TouchableOpacity } from 'react-native'
import { event } from 'react-native-reanimated';
import { AuthLayout, CardBox, KeyBoardNumeric, Paginator, Screen, Stack, StyledText, Title } from '../../components';
import { ROUTES } from '../../constants';
import { useTheme } from 'styled-components'
import { Circle, Svg } from 'react-native-svg';

const CreatePasscode = () => {
  const [passcode, setPasscode] = useState('');
  const navigation = useNavigation();
  const regex = /^[0-9]*$/
  const { fontColor } = useTheme()

  handleChange = (num) => {
    setPasscode(s => s.length < 6 ? s + num : s)
  }

  useEffect(() => {
    if (passcode.length === 6) {
      navigation.navigate(ROUTES.AUTH.RE_ENTRY_PASSWORD, { 'passcode': passcode });
    }
  }, [passcode]);

  return (
    <AuthLayout>
      <Stack padding={28} spacing={29}>
        <Title>
          Create Passcode
        </Title>
        <StyledText>
          Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.
        </StyledText>
      </Stack>

      <Stack padding={50} spacing={50}>
        <Stack direction="row" alignItems="center" spacing={16} style={{ justifyContent: 'center' }}>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <View key={index} style={{ width: 10, height: 10, borderWidth: 1, borderStyle: 'solid', borderColor: fontColor, borderRadius: 9999, backgroundColor: index < passcode.length ? fontColor : 'transparent' }} />
          ))}
        </Stack>

        <KeyBoardNumeric onNumber={(num) => handleChange(num)} onReset={() => setPasscode('')} onDelete={() => setPasscode(s => s.slice(0,-1))} />
      </Stack>
    </AuthLayout>
  )
}

export default CreatePasscode
