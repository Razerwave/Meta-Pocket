import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useAuth } from '../context/AuthContext';

const AppStatusBar = () => {
  const { isDarkTheme } = useAuth()
  const { backgroundColor } = useTheme()

  return (
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      showHideTransition={'slide'}
      hidden={false}
    />
  )
}

export default AppStatusBar