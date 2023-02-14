import {StatusBar, View} from 'react-native';
import {useAuth} from '../context/AuthContext';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const AppStatusBar = () => {
  const {statusBar} = useAuth();

  const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? getStatusBarHeight() : 0;

  return (
    <View
      style={{
        width: '100%',
        height: STATUS_BAR_HEIGHT,
        backgroundColor: statusBar.backgroundColor,
      }}>
      <StatusBar
        backgroundColor={statusBar.backgroundColor}
        barStyle={statusBar.colorStyle}
        showHideTransition={'slide'}
        hidden={false}
      />
    </View>
  );
};

export default AppStatusBar;
