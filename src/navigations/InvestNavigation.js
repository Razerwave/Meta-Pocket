import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import { useTheme } from 'styled-components'
import { InvestScreen, MiningInfoScreen, MiningSwapScreen } from '../screens/invest';

const Stack = createNativeStackNavigator();

const InvestNavigation = () => {
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
      initialRouteName={ROUTES.INVEST.BASE}
    >
      <Stack.Screen options={{ headerShown: false }} name={ROUTES.INVEST.BASE} component={InvestScreen} />
      <Stack.Screen options={{ title: 'Minning Swap' }} name={ROUTES.INVEST.MINNING_SWAP} component={MiningSwapScreen} />
      <Stack.Screen options={{ title: '0x1234kdsfklsajdf' }} name={ROUTES.INVEST.MINNING_INFO} component={MiningInfoScreen} />
    </Stack.Navigator>
  )
}

export default InvestNavigation