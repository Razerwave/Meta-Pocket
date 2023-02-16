// import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, Alert} from 'react-native';
import {
  CardBox,
  KeyBoardPasscode,
  LayoutScreen,
  Screen,
  Stack,
  StyledText,
  Title,
} from '../components';
import {useAuth} from '../context/AuthContext';
import {useTheme} from 'styled-components';
// import { ROUTES } from '../constants';
// import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const PasscodeLoginScreen = () => {
  const {unlock, checkPasscode} = useAuth();
  const [passcode, setPasscode] = useState('');
  const {i18n} = useAuth();
  useEffect(() => {
    if (passcode?.length === 6) {
      if (checkPasscode(passcode)) {
        Alert.alert('success');
        unlock();
      } else {
        Alert.alert("doesn't match passcode");
        setPasscode('');
      }
    }
  }, [passcode]);

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
    <LayoutScreen>
      <Stack padding={28} spacing={29} marginTop={50}>
        <Title>{i18n.enterThePasscode}</Title>
        <StyledText>{i18n.digitPasscode}</StyledText>
      </Stack>

      <Stack padding={50}>
        <KeyBoardPasscode value={passcode} onChange={v => setPasscode(v)} />
      </Stack>
    </LayoutScreen>
  );
};

export default PasscodeLoginScreen;
