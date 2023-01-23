import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import { NewWalletScreen, NewWalletWordScreen, WelcomeScreen } from '../screens/auth';
import { CreatePassword } from '../screens/index';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.CREATE_PASSWORD} component={CreatePassword} />
            <Stack.Screen name={ROUTES.WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={ROUTES.NEW_WALLET} component={NewWalletScreen} />
            <Stack.Screen name={ROUTES.NEW_WALLET_WORDS} component={NewWalletWordScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigation