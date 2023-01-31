import styled from 'styled-components/native';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const HomeScreen = ({children, bottom}) => {
  return (
    <StyledViewContainer>
      <SafeAreaView>
        {children}
        <View style={{height: 100}}></View>
      </SafeAreaView>
    </StyledViewContainer>
  );
};

const StyledViewContainer = styled.ScrollView`
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

export default HomeScreen;
