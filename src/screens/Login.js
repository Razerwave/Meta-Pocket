import React, { useState } from 'react';
import {View, Text, AppState,TextInput , Alert, Button} from 'react-native'
import styled from 'styled-components/native'
import { ROUTES } from '../constants/index'
import { useAuth } from '../context/AuthContext';

const Login = ({ navigation }) => {
  const {password, setPassword} = useAuth();
  const {pwd, setPwd} = useState("");
  console.log(pwd, " ppppppsppsp");
  console.log(password, " -------------");

  return (
    <Wrapper>
      <Text>{password}</Text>
      <Text>{pwd}</Text>
      <Button onPress={() => navigation.navigate(ROUTES.CREATE_PASSWORD)} title="Create Passcode" />
      <Button title="Create" ></Button>




    </Wrapper>
  )
}
const Wrapper = styled.View`
width: 100%;
height: 100%;
padding: 0 40px;
gap: 20px;
background-color: '#F9FBFC';
display: flex;
justify-content: center;
`;
export default Login
