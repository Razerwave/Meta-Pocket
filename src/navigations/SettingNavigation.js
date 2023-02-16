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
import { useAuth } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const SettingNavigation = () => {
  const { i18n } = useAuth();
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
        options={{ headerShown: true, title: i18n.more }}
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
        options={{ title: i18n.kyc }}
        name={ROUTES.SETTING.EMAIL_VERIFICATION}
        component={EmailVerification}
      />
      <Stack.Screen
        options={{ title: i18n.referralUID }}
        name={ROUTES.SETTING.REFERRAL}
        component={Referral}
      />
      <Stack.Screen
        options={{ title: i18n.notice }}
        name={ROUTES.SETTING.NOTICE_LIST}
        component={NoticeList}
      />
      <Stack.Screen
        options={{ title: i18n.notice }}
        name={ROUTES.SETTING.NOTICE}
        component={NoticeScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigation;
