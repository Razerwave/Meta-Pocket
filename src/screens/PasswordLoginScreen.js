import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, Alert} from 'react-native';
import {ROUTES} from '../constants';
import {useAuth} from '../context/AuthContext';
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
  const [pwd, setPwd] = useState('');
  const navigation = useNavigation();
  console.log(password);

  useEffect(() => {
    if (pwd?.length === 6) {
      if (pwd == password) {
        console.log(pwd);
        Alert.alert('success');
        setIsLocked(false);
        setIsLoggedin(true);
        console.log(isLoggedIn + ' ------------');
        console.log(password + ' +++++++++++');
        // navigation.navigate(ROUTES.HOME);
      } else {
        Alert.alert("doesn't match password");
        setPwd('');
      }
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
    <View>
      <TextInput
        placeholder="Enter password"
        value={pwd}
        secureTextEntry={true}
        numberOfLines={4}
        keyboardType="numeric"
        autoFocus={true}
        onChangeText={data => setPwd(data)}
        underlineColorAndroid="transparent"
      />

      <Text>
        {pwd} {password}
      </Text>
    </View>
  );
};

export default PasswordLoginScreen;
