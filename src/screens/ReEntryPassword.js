import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, Alert, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ROUTES } from '../constants';
import { useNavigation, useRoute } from '@react-navigation/native';

const ReEntryPassword = () => {
    const route = useRoute();
    const [repassword, setRePassword] = useState('');
    const password = route.params.password

    const [usel, setUsel] = useState();
    
    const getValue = () => {
        AsyncStorage.getItem('password').then(value => setUsel(value))
    }
      useEffect(() => {
        if(repassword.length ===6){
            if(repassword === password) {
                AsyncStorage.setItem('password', password);
                Alert.alert('DATA SAVED');
            }
            else {
                Alert.alert('Password does not match')
            }
        }
      });
  return (
    <View>
      <Text>{password}</Text>
      <TextInput placeholder='Re-Entry password'
          value={repassword}
          secureTextEntry={true}
          keyboardType='numeric'
          autoFocus={true}
          onChangeText={(data) => setRePassword(data)}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity onPress={getValue}>
          <Text>
              get show {repassword} {usel}
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReEntryPassword
