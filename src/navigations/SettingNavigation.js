import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { PasscodeReEnterScreen, PasscodeResetScreen, SettingScreen } from '../screens/setting';
import { CardBox, StyledText } from '../components';

const Stack = createNativeStackNavigator();

const SettingNavigation = () => {
  const { backgroundColor, fontColor } = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor,
        },
        headerTintColor: fontColor,
      }}
      initialRouteName={ROUTES.SETTING.BASE}
    >
      <Stack.Screen name={ROUTES.SETTING.BASE} component={SettingScreen} />
      <Stack.Screen options={{ title: '' }} name={ROUTES.SETTING.PASSCODE_RESET} component={PasscodeResetScreen} />
      <Stack.Screen options={{ title: '' }} name={ROUTES.SETTING.PASSCODE_RE_ENTER} component={PasscodeReEnterScreen} />
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