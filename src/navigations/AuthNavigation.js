import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants';
import {
  BackupWallet,
  CreatePasscode,
  RecoverWallet,
  WelcomeScreen,
  ProtectWallet,
  ConfirmPasscode,
  CheckBackupWallet,
} from '../screens/auth';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

const stepsName = {
  [ROUTES.AUTH.NEW_WALLET]: 1,
  [ROUTES.AUTH.CHECK_BACKUP_WALLET]: 2,
  [ROUTES.AUTH.RECOVER_WALLET]: 2,
  [ROUTES.AUTH.PROTECT_WALLET]: 3,
  [ROUTES.AUTH.CREATE_PASSCODE]: 4,
  [ROUTES.AUTH.CONFIRM_PASSCODE]: 5,
};

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  const { backgroundColor, activeTintColor, fontColor } = useTheme();

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
        headerTitle: props => {
          const currentStep = stepsName[props.children] || 0;
          return (
            <View style={[styles.stepContainer, { backgroundColor }]}>
              <View
                style={[
                  styles.step,
                  { backgroundColor: 1 <= currentStep ? fontColor : 'gray' },
                ]}
              />
              <View
                style={[
                  styles.step,
                  { backgroundColor: 2 <= currentStep ? fontColor : 'gray' },
                ]}
              />
              <View
                style={[
                  styles.step,
                  { backgroundColor: 3 <= currentStep ? fontColor : 'gray' },
                ]}
              />
              <View
                style={[
                  styles.step,
                  { backgroundColor: 4 <= currentStep ? fontColor : 'gray' },
                ]}
              />
              <View
                style={[
                  styles.step,
                  { backgroundColor: 5 <= currentStep ? fontColor : 'gray' },
                ]}
              />
            </View>
          );
        },
      }}
      initialRouteName={ROUTES.AUTH.WELCOME}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.AUTH.WELCOME}
        component={WelcomeScreen}
      />
      <Stack.Screen name={ROUTES.AUTH.RECOVER_WALLET} component={RecoverWallet} />
      <Stack.Screen name={ROUTES.AUTH.BACKUP_WALLET} component={BackupWallet} />
      <Stack.Screen name={ROUTES.AUTH.CHECK_BACKUP_WALLET} component={CheckBackupWallet} />
      <Stack.Screen name={ROUTES.AUTH.PROTECT_WALLET} component={ProtectWallet} />
      <Stack.Screen name={ROUTES.AUTH.CREATE_PASSCODE} component={CreatePasscode} />
      <Stack.Screen name={ROUTES.AUTH.CONFIRM_PASSCODE} component={ConfirmPasscode} />

    </Stack.Navigator>
  );
};

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
});

export default AuthNavigation;
