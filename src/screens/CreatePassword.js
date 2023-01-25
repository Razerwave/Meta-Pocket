import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Alert } from 'react-native'
import { event } from 'react-native-reanimated';
import { ROUTES } from '../constants';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const regex = /^[0-9]*$/

  const onlyNumber  = (event) => {
        return regex.test(event)
  }

  handleChange = (val) => {
    console.log(val, val.length === 6, onlyNumber(val));
    if (onlyNumber(val)) {
      setPassword(val)
    }
  }

  useEffect(() => {
    if (password.length === 6) {
      navigation.navigate(ROUTES.RENTRYPASSWORD, {'password': password});
    }
  },[password]);
    
  return (
    <View>
        <TextInput placeholder='Enter password'
          value={password}
          secureTextEntry={true}
          numberOfLines={4}
          keyboardType='numeric'
          autoFocus={true}
          onChangeText={(val)=>{handleChange(val)}}
          underlineColorAndroid='transparent'
        />
        <Text>{password}</Text>
    </View>
  )
}

export default CreatePassword
