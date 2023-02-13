import React, {useRef, useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import {
  ConfirmResetPasscode,
  EmailVerification,
  ResetPasscode,
} from '../screens/setting';
import {ExploreListScreen} from '../screens/Explore';
import {WebScreen} from '../screens';
import {ROUTES} from '../constants';
import HomeNavigation from './HomeNavigation';
import {LayoutHeader} from '../components';
import Referral from '../screens/setting/Referral';
import { PortfolioScreen } from '../screens/wallet';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const {backgroundColor, fontColor} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({options}) => <LayoutHeader {...options} />,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor,
        },
        headerTintColor: fontColor,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeNavigation}
      />
      {/* WALLET */}
      <Stack.Screen
        options={{title: ''}}
        name={ROUTES.WALLET.PORTFOLIO}
        component={PortfolioScreen}
      />
      {/* SETTING */}
      <Stack.Screen
        options={{title: ''}}
        name={ROUTES.SETTING.RESET_PASSCODE}
        component={ResetPasscode}
      />
      <Stack.Screen
        options={{title: ''}}
        name={ROUTES.SETTING.CONFIRM_RESET_PASSCODE}
        component={ConfirmResetPasscode}
      />
      <Stack.Screen
        options={{title: 'KYC'}}
        name={ROUTES.SETTING.EMAIL_VERIFICATION}
        component={EmailVerification}
      />
      <Stack.Screen
        options={{title: 'Referral UID'}}
        name={ROUTES.SETTING.REFERRAL}
        component={Referral}
      />
      {/* EXPLORE */}
      <Stack.Screen
        options={{headerShown: true, title: 'Explore'}}
        name={ROUTES.EXPLORE.LIST_SCREEN}
        component={ExploreListScreen}
      />
      <Stack.Screen
        options={({
          route: {
            params: {title, uri},
          },
        }) => ({title: title || uri})}
        name={ROUTES.EXPLORE.WEB}
        component={WebScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
