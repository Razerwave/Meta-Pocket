import styled from 'styled-components/native';
import { View, Text, Button, Alert, StyleSheet } from 'react-native'

const HomeScreen = ({ children, bottom }) => {
  return (
    <StyledViewContainer>
      {children}
      <View style={{height: 100}}></View>
    </StyledViewContainer>
  )
}

const StyledViewContainer = styled.ScrollView`
  background-color: ${props => props.theme.backgroundColor};
`

export default HomeScreen