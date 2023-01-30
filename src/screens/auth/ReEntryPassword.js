import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, Alert, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ROUTES } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import useAuth from '../../context/AuthContext';
import { CardBox, Screen, Stack, StyledText } from '../../components';
import { useTheme } from 'styled-components'

const ReEntryPassword = () => {
  const { fontColor } = useTheme()
  const route = useRoute();
  const navigation = useNavigation();
  const { isLoggedIn, setIsLoggedin, setPassword, setIsLocked } = useAuth();

  const [repassword, setRePassword] = useState('');
  const password = route.params.password

  const [usel, setUsel] = useState();

  const getValue = () => {
    AsyncStorage.getItem('password').then(value => setUsel(value))
  }
  useEffect(() => {
    if (repassword.length === 6) {
      if (repassword === password) {
        // AsyncStorage.setItem('password', password);
        console.log(password, "pass ok");
        setPassword(password)
        setIsLoggedin(true);
        setIsLocked(false);
        // navigation.navigate(ROUTES.HOME, { 'password': password });
        console.log('DATA SAVED');
      }
      else {
        Alert.alert('Password does not match')
      }
    }
  });
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
            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.
          </StyledText>
        </CardBox>
        <CardBox>
          <TextInput placeholder='Re-Entry password'
            style={{ height: 40, color: fontColor }}
            placeholderTextColor="gray"
            value={repassword}
            secureTextEntry={true}
            keyboardType='numeric'
            autoFocus={true}
            onChangeText={(data) => setRePassword(data)}
            underlineColorAndroid='transparent'
          />
        </CardBox>
      </Stack>
    </Screen>
  )
}

export default ReEntryPassword
