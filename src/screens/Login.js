import React from 'react';
import {View, Text, AppState,  Button} from 'react-native'
import styled from 'styled-components/native'
import { ROUTES } from '../constants/index'
import { useAuth } from '../context/AuthContext';

const Login = ({ navigation }) => {
  const {user, setUser} = useAuth();
  const name = user?.name

  return (
    <Wrapper>
      <Text>{name}</Text>
      <Button onPress={() => navigation.navigate(ROUTES.CREATE_PASSWORD)} title="Create Passcode" />
      <Button onPress={() => setUser({name: 'Hi jhon'})} title="Create" ></Button>
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
