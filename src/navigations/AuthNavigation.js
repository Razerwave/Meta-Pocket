import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import { NewWalletScreen, NewWalletWordScreen, RecoverWalletScreen, WelcomeScreen } from '../screens/auth';

import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { CreatePassword, LoginScreen, ReEntryPassword, Terms, HomeScreen, PasswordLoginScreen } from '../screens';

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

const AuthNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: (props) => {
                    const currentStep = stepsName[props.children] || 0
                    return (
                        <View style={styles.stepContainer}>
                            <View style={[styles.step, { backgroundColor: 1 <= currentStep ? 'gray' : 'lightgray' }]} />
                            <View style={[styles.step, { backgroundColor: 2 <= currentStep ? 'gray' : 'lightgray' }]} />
                            <View style={[styles.step, { backgroundColor: 3 <= currentStep ? 'gray' : 'lightgray' }]} />
                            <View style={[styles.step, { backgroundColor: 4 <= currentStep ? 'gray' : 'lightgray' }]} />
                            <View style={[styles.step, { backgroundColor: 5 <= currentStep ? 'gray' : 'lightgray' }]} />
                        </View>
                    )
                },
            }}
            initialRouteName={ROUTES.WELCOME}>
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={ROUTES.NEW_WALLET} component={NewWalletScreen} />
            <Stack.Screen name={ROUTES.NEW_WALLET_WORDS} component={NewWalletWordScreen} />
            <Stack.Screen name={ROUTES.RECOVER_WALLET} component={RecoverWalletScreen} />
            <Stack.Screen name={ROUTES.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={ROUTES.TERMS_SCREEN} component={Terms} />
            <Stack.Screen name={ROUTES.CREATE_PASSWORD} component={CreatePassword} />
            <Stack.Screen name={ROUTES.RENTRYPASSWORD} component={ReEntryPassword} />
            <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
            <Stack.Screen name={ROUTES.PASSWORDLOGIN} component={PasswordLoginScreen} />
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

export default AuthNavigation