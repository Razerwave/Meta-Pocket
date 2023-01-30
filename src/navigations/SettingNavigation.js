import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import { NewWalletScreen, NewWalletWordScreen, RecoverWalletScreen, WelcomeScreen } from '../screens/auth';

import { View, StyleSheet } from 'react-native'
import { CreatePassword, LoginScreen, ReEntryPassword, Terms, HomeScreen, PasswordLoginScreen } from '../screens';
import { useTheme } from 'styled-components'
import { PasscodeReEnterScreen, PasscodeResetScreen, SettingScreen } from '../screens/setting';

const stepsName = {
  [ROUTES.NEW_WALLET]: 1,
  [ROUTES.NEW_WALLET_WORDS]: 2,
  [ROUTES.RECOVER_WALLET]: 2,
  [ROUTES.LOGIN_SCREEN]: 3,
  [ROUTES.TERMS_SCREEN]: 3,
  [ROUTES.CREATE_PASSWORD]: 4,
  [ROUTES.RENTRYPASSWORD]: 5,
}

const Stack = createNativeStackNavigator();

const SettingNavigation = () => {
  const { backgroundColor, activeTintColor, fontColor } = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor
        },
      }}
      initialRouteName={ROUTES.SETTING.BASE}
    >
      <Stack.Screen name={ROUTES.SETTING.BASE} component={SettingScreen} />
      <Stack.Screen name={ROUTES.SETTING.PASSCODE_RESET} component={PasscodeResetScreen} />
      <Stack.Screen name={ROUTES.SETTING.PASSCODE_RE_ENTER} component={PasscodeReEnterScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  step: {
    marginHorizontal: '1%',
    height: 10,
    minWidth: '15%',
  },
})

export default SettingNavigation