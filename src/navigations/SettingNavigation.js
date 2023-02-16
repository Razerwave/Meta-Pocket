import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import {
  ConfirmResetPasscode,
  EmailVerification,
  ResetPasscode,
  Referral,
  NoticeList,
  NoticeScreen,
} from '../screens/setting';
import { ROUTES } from '../constants';
import { LayoutHeader } from '../components';
import { SettingScreen } from '../screens/home';

const Stack = createNativeStackNavigator();

const SettingNavigation = () => {
  const { backgroundColor, fontColor } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ options }) => <LayoutHeader {...options} />,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor,
        },
        headerTintColor: fontColor,
      }}>
      {/* SETTING */}
      <Stack.Screen
        options={{headerShown: true, title: 'More'}}
        name={'ROUTES.SETTING.RESET_PASSCODE'}
        component={SettingScreen}
      />
      <Stack.Screen
        options={{ title: '' }}
        name={ROUTES.SETTING.RESET_PASSCODE}
        component={ResetPasscode}
      />
      <Stack.Screen
        options={{ title: '' }}
        name={ROUTES.SETTING.CONFIRM_RESET_PASSCODE}
        component={ConfirmResetPasscode}
      />
      <Stack.Screen
        options={{ title: 'KYC' }}
        name={ROUTES.SETTING.EMAIL_VERIFICATION}
        component={EmailVerification}
      />
      <Stack.Screen
        options={{ title: 'Referral UID' }}
        name={ROUTES.SETTING.REFERRAL}
        component={Referral}
      />
      <Stack.Screen
        options={{ title: 'Notice' }}
        name={ROUTES.SETTING.NOTICE_LIST}
        component={NoticeList}
      />
      <Stack.Screen
        options={{ title: 'Notice' }}
        name={ROUTES.SETTING.NOTICE}
        component={NoticeScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigation;
