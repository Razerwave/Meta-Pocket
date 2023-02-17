import styled from 'styled-components/native';
import {SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useAuth} from '../../context/AuthContext';
import {useEffect} from 'react';
import {useTheme} from 'styled-components';

const LayoutScreen = ({children, statusBar}) => {
  const {backgroundColor, statusBarStyle} = useTheme();
  const {setStatusBar, mainOnPressEvent} = useAuth();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setStatusBar({
        backgroundColor: statusBar
          ? statusBar.backgroundColor
          : backgroundColor,
        colorStyle: statusBar ? statusBar.colorStyle : statusBarStyle,
      });
    }
  }, [isFocused]);

  const handleOnPress = () => {
    if (mainOnPressEvent) {
      try {
        mainOnPressEvent();
      } catch (ex) {
        console.log('Main Press Event error');
      }
    }
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <StyledViewContainer>{children}</StyledViewContainer>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const StyledViewContainer = styled.View`
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

export default LayoutScreen;
