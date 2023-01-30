// import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Alert } from 'react-native';
import { CardBox, Screen, Stack, StyledText } from '../components';
import { useAuth } from '../context/AuthContext';
import { useTheme } from 'styled-components'
// import { ROUTES } from '../constants';
// import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const PasswordLoginScreen = () => {
  const {
    password,
    setPassword,
    isLoggedIn,
    setIsLoggedin,
    isLocked,
    setIsLocked,
  } = useAuth();
  const { fontColor } = useTheme()
  const [pwd, setPwd] = useState('');
  // const navigation = useNavigation();

  useEffect(() => {
    if (pwd?.length === 6) {
      if (pwd == password) {
        Alert.alert('success');
        setIsLocked(false);
        // setIsLoggedin(true);
        // navigation.navigate(ROUTES.HOME);
      } else {
        Alert.alert("doesn't match password");
        setPwd('');
      }
      console.log("pwd", pwd);
      console.log("password", password);
      console.log("isLoggedIn", isLoggedIn);
    }
  }, [pwd]);

  // const rnBiometrics = new ReactNativeBiometrics();

  // const {biometryType} = rnBiometrics.isSensorAvailable();

  // rnBiometrics.isSensorAvailable()
  //   .then((resultObject) => {
  //     const { available, biometryType } = resultObject

  //     if (available && biometryType === BiometryTypes.TouchID) {
  //       console.log('TouchID is supported')
  //     } else if (available && biometryType === BiometryTypes.FaceID) {
  //       console.log('FaceID is supported')
  //     } else if (available && biometryType === BiometryTypes.Biometrics) {
  //       console.log('Biometrics is supported')
  //     } else {
  //       console.log('Biometrics not supported')
  //     }
  //   })
  return (
    <Screen>
      <Stack padding={16} spacing={16}>
        <CardBox>
          <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
            Enter Passcode
          </StyledText>
        </CardBox>
        <CardBox>
          <TextInput
            style={{ height: 40, color: fontColor }}
            placeholderTextColor="gray"
            placeholder="Enter Passcode"
            value={pwd}
            secureTextEntry={true}
            numberOfLines={4}
            keyboardType="numeric"
            autoFocus={true}
            onChangeText={data => setPwd(data)}
            underlineColorAndroid="transparent"
          />
        </CardBox>
      </Stack>
    </Screen>
  );
};

export default PasswordLoginScreen;
