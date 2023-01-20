import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import { NewWalletScreen, NewWalletWordScreen, RecoverWalletScreen, WelcomeScreen } from '../screens/auth';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={ROUTES.NEW_WALLET} component={NewWalletScreen} />
            <Stack.Screen name={ROUTES.NEW_WALLET_WORDS} component={NewWalletWordScreen} />
            <Stack.Screen name={ROUTES.RECOVER_WALLET} component={RecoverWalletScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigation