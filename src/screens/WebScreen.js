import WebView from 'react-native-webview';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

const WebScreen = ({ route }) => {
  const { uri } = route.params;

  return (
    <SafeAreaView>
      <StyledViewContainer>
        {uri && <WebView source={{ uri: uri }} />}
      </StyledViewContainer>
    </SafeAreaView>
  )
};


const StyledViewContainer = styled.View`
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

export default WebScreen;