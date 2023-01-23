import React from 'react'
import {View, Text, Button} from 'react-native'
import styled from 'styled-components/native'
import { ROUTES } from '../constants/index'

const Login = ({ navigation }) => {
  
  return (
    <Wrapper>
      <Button onPress={() => navigation.navigate(ROUTES.CREATE_PASSWORD)} title="Create Passcode" ></Button>
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
