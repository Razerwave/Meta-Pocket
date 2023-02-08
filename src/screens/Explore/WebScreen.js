import WebView from 'react-native-webview';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { useEffect } from 'react';


const WebScreen = ({ route, navigation }) => {
  const { uri } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: uri })
  }, [navigation, uri])

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