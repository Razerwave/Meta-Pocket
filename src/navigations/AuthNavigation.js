import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import {
  BackupWallet,
  CreatePasscode,
  RecoverWallet,
  WelcomeScreen,
  ProtectWallet,
  ConfirmPasscode,
  CheckBackupWallet,
  Result,
} from '../screens/auth';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';

const stepsName = {
  [ROUTES.AUTH.RECOVER_WALLET]: 1,
  [ROUTES.AUTH.BACKUP_WALLET]: 1,
  [ROUTES.AUTH.CHECK_BACKUP_WALLET]: 2,
  [ROUTES.AUTH.PROTECT_WALLET]: 3,
  [ROUTES.AUTH.CREATE_PASSCODE]: 4,
  [ROUTES.AUTH.CONFIRM_PASSCODE]: 5,
};

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  const {backgroundColor, activeTintColor, fontColor} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor,
        },
        headerTintColor: fontColor,
        headerTitle: '',
      }}
      initialRouteName={ROUTES.AUTH.WELCOME}>
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.AUTH.WELCOME}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={ROUTES.AUTH.RECOVER_WALLET}
        component={RecoverWallet}
      />
      <Stack.Screen name={ROUTES.AUTH.BACKUP_WALLET} component={BackupWallet} />
      <Stack.Screen
        name={ROUTES.AUTH.CHECK_BACKUP_WALLET}
        component={CheckBackupWallet}
      />
      <Stack.Screen
        name={ROUTES.AUTH.PROTECT_WALLET}
        component={ProtectWallet}
      />
      <Stack.Screen
        name={ROUTES.AUTH.CREATE_PASSCODE}
        component={CreatePasscode}
      />
      <Stack.Screen
        name={ROUTES.AUTH.CONFIRM_PASSCODE}
        component={ConfirmPasscode}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.AUTH.RESULT}
        component={Result}
      />
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
