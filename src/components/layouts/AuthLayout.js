import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

const AuthLayout = ({ children }) => {
  return (
    <SafeAreaView>
      <StyledViewContainer>
        {children}
      </StyledViewContainer>
    </SafeAreaView>
  )
}


const StyledViewContainer = styled.View`
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

export default AuthLayout