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
    <SafeAreaView>
      <StyledViewContainer>
        {children}
        <View style={{height: 100}}></View>
      </StyledViewContainer>
    </SafeAreaView>
  );
};

const StyledViewContainer = styled.ScrollView`
  background-color: ${props => props.theme.backgroundColor};
`;

export default HomeScreen;
