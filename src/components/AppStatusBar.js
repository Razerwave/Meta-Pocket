import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useAuth } from '../context/AuthContext';

const AppStatusBar = ({ barColor, barStyle }) => {
  const { isDarkTheme } = useAuth()
  const { backgroundColor } = useTheme()
  
  const themeStyle = isDarkTheme ? 'light-content' : 'dark-content'

  return (
    <StatusBar
      backgroundColor={barColor || backgroundColor}
      barStyle={barStyle || themeStyle}
      showHideTransition={'slide'}
      hidden={false}
    />
  )
}

export default AppStatusBar