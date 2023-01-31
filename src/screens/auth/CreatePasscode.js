import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Alert } from 'react-native'
import { event } from 'react-native-reanimated';
import { CardBox, Screen, Stack, StyledText } from '../../components';
import { ROUTES } from '../../constants';
import { useTheme } from 'styled-components'

const CreatePasscode = () => {
  const [passcode, setPasscode] = useState('');
  const navigation = useNavigation();
  const regex = /^[0-9]*$/
  const { fontColor } = useTheme()

  const onlyNumber = (event) => {
    return regex.test(event)
  }

  handleChange = (val) => {
    console.log(val, val.length === 6, onlyNumber(val));
    if (onlyNumber(val)) {
      setPasscode(val)
    }
  }

  useEffect(() => {
    if (passcode.length === 6) {
      navigation.navigate(ROUTES.AUTH.RE_ENTRY_PASSWORD, { 'passcode': passcode });
    }
  }, [passcode]);

  return (
    <Screen>
      <Stack spacing={16} padding={16}>
        <CardBox>
          <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
            Create Passcode
          </StyledText>
        </CardBox>
        <CardBox>
          <StyledText>
            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.
          </StyledText>
        </CardBox>
        <CardBox>
          <TextInput
            style={{ height: 40, color: fontColor }}
            placeholderTextColor="gray"
            value={passcode}
            placeholder='Enter passcode'
            secureTextEntry={true}
            keyboardType='numeric'
            autoFocus={true}
            onChangeText={(val) => { handleChange(val) }}
            underlineColorAndroid='transparent'
          />
        </CardBox>
      </Stack>
    </Screen>
  )
}

export default CreatePasscode
