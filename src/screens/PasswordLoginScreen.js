import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Alert } from 'react-native'
import { ROUTES } from '../constants';
import { useAuth } from '../context/AuthContext';

const PasswordLoginScreen = () => {
  const { password, setPassword,islogged, isLocked, setIsLocked }= useAuth();
  const [ pwd , setPwd ] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if(pwd.length ===6){
        if(pwd === password){
          Alert.alert('success')
          setIsLocked(false)
          console.log((islogged + " ------------"));
          console.log((isLocked + " +++++++++++"));
          navigation.navigate(ROUTES.HOME)
        }
        else{
            Alert.alert("doesn't match password")
            setPwd('');
        }
    }
  },[pwd]);
    
  return (
    <View>
        <TextInput placeholder='Enter password'
          value={pwd}
          secureTextEntry={true}
          numberOfLines={4}
          keyboardType='numeric'
          autoFocus={true}
          onChangeText={(data) => setPwd(data)}
          underlineColorAndroid='transparent'
        />
    
        <Text>{pwd} {password}</Text>
    </View>
  )
}

export default PasswordLoginScreen
