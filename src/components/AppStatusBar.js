import {StatusBar, View} from 'react-native';
import {useTheme} from 'styled-components';
import {useAuth} from '../context/AuthContext';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useEffect} from 'react';

const AppStatusBar = ({barColor, barStyle}) => {
  const {isDarkTheme} = useAuth();
  const {backgroundColor} = useTheme();

  const themeStyle = isDarkTheme ? 'light-content' : 'dark-content';

  const STATUS_BAR_HEIGHT =
    Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;

  return (
    <View
      style={{
        width: '100%',
        height: STATUS_BAR_HEIGHT,
        backgroundColor: barColor || backgroundColor,
      }}>
      <StatusBar
        backgroundColor={barColor || backgroundColor}
        barStyle={barStyle || themeStyle}
        showHideTransition={'slide'}
        hidden={false}
      />
    </View>
  );
};

export default AppStatusBar;
