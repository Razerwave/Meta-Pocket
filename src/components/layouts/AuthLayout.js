import styled from 'styled-components/native';
import { SafeAreaView, View } from 'react-native';

const AuthLayout = ({ children, button }) => {
  return (
    <SafeAreaView>
      <StyledViewContainer>
        {children}
        <StyledViewBottom>
          <View style={{ height: 180, paddingHorizontal: 55, alignItems: 'center' }}>
            {button}
          </View>
        </StyledViewBottom>
      </StyledViewContainer>
    </SafeAreaView>
  )
}


const StyledViewContainer = styled.View`
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

const StyledViewBottom = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: ${props => props.theme.backgroundColor};
`;

export default AuthLayout