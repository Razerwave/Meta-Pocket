import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, Alert, Button } from 'react-native'
import { ROUTES } from '../constants';
import { useAuth } from '../context/AuthContext';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const {user, setUser} = useAuth();

  const navigation = useNavigation();
  const regex = /^[0-9\b]+$/;

  useEffect(() => {
    if(password.length != 0 && !regex.test(password)){
      Alert.alert('only number')
      setPassword('');
    }
    else if(password.length === 6){
      navigation.navigate(ROUTES.RENTRYPASSWORD, {'password': password})
    }
  });
    
  return (
    <View>
      <Text>{user?.name}</Text>
        <TextInput placeholder='Enter password'
          value={password}
          secureTextEntry={true}
          numberOfLines={4}
          keyboardType='numeric'
          autoFocus={true}
          onChangeText={(data) => setPassword(data)}
          underlineColorAndroid='transparent'
        />
    
        <Text>{password}</Text>
    </View>
  )
}

export default CreatePassword
