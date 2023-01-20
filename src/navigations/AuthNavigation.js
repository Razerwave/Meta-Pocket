import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import { NewWalletScreen, NewWalletWordScreen, RecoverWalletScreen, WelcomeScreen } from '../screens/auth';
import { View, Text, Button, Alert, StyleSheet } from 'react-native'

const stepsName = {
    [ROUTES.NEW_WALLET]: 1,
    [ROUTES.NEW_WALLET_WORDS]: 2,
    [ROUTES.RECOVER_WALLET]: 1
}

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitle: (props) => {
                const currentStep = stepsName[props.children] || 0
                console.log(currentStep)
                return (
                    <View style={styles.stepContainer}>
                        <View style={[styles.step, { backgroundColor: 1 <= 1 ? 'lightgray' : 'gray' }]} />
                        <View style={[styles.step, { backgroundColor: currentStep <= 2 ? 'lightgray' : 'gray' }]} />
                        <View style={[styles.step, { backgroundColor: currentStep <= 3 ? 'lightgray' : 'gray' }]} />
                        <View style={[styles.step, { backgroundColor: currentStep <= 4 ? 'lightgray' : 'gray' }]} />
                        <View style={[styles.step, { backgroundColor: currentStep <= 5 ? 'lightgray' : 'gray' }]} />
                    </View>
                )
            },
        }} initialRouteName={ROUTES.WELCOME}>
            <Stack.Screen options={{ headerShown: false }} name={ROUTES.WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={ROUTES.NEW_WALLET} component={NewWalletScreen} />
            <Stack.Screen name={ROUTES.NEW_WALLET_WORDS} component={NewWalletWordScreen} />
            <Stack.Screen name={ROUTES.RECOVER_WALLET} component={RecoverWalletScreen} />
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