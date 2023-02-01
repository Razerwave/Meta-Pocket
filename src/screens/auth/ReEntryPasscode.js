import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, Alert, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ROUTES } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import {useAuth} from '../../context/AuthContext';
import { CardBox, Screen, Stack, StyledText } from '../../components';
import { useTheme } from 'styled-components'

const ReEntryPasscode = () => {
  const { fontColor } = useTheme()
  const route = useRoute();
  const navigation = useNavigation();
  const { login } = useAuth();

  const [repasscode, setRePasscode] = useState('');
  const passcode = route.params.passcode

  useEffect(() => {
    console.log("USEEFFECT", repasscode.length === 6, repasscode === passcode, passcode, repasscode);
    if (repasscode.length === 6) {
      if (repasscode === passcode) {
        // AsyncStorage.setItem('passcode', passcode);
        login(passcode)
        // navigation.navigate(ROUTES.HOME, { 'passcode': passcode });
      }
      else {
        Alert.alert('Passcode does not match')
      }
    }
  },[repasscode]);
  return (
    <Screen>
      <Stack spacing={16} padding={16}>
        <CardBox>
          <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
            Re-enter the Passcode
          </StyledText>
        </CardBox>
        <CardBox>
          <StyledText>
            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet. {repasscode}  {passcode}
          </StyledText>
        </CardBox>
        <CardBox>
          <TextInput placeholder='Re-Entry passcode'
            style={{ height: 40, color: fontColor }}
            placeholderTextColor="gray"
            value={repasscode}
            secureTextEntry={true}
            keyboardType='numeric'
            autoFocus={true}
            onChangeText={(data) => setRePasscode(data)}
            underlineColorAndroid='transparent'
          />
        </CardBox>
      </Stack>
    </Screen>
  )
}

export default ReEntryPasscode
