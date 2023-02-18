import React, {useRef, useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import {
  ConfirmResetPasscode,
  EmailVerification,
  ResetPasscode,
  Referral,
  NoticeList,
  NoticeScreen,
} from '../screens/setting';
import {ExploreListScreen} from '../screens/Explore';
import {EnterPasscode, WebScreen} from '../screens';
import {ROUTES} from '../constants';
import HomeNavigation from './HomeNavigation';
import {ActionInfoBorder, LayoutHeader} from '../components';
import {
  BTCScreen,
  LoadNftScreen,
  PortfolioScreen,
  SendBTCScreen,
  SendNftAuthScreen,
  SendNftScreen,
} from '../screens/wallet';
import {useAuth} from '../context/AuthContext';
// import {BuyItem} from '../screens/BuyItem/index';
// import {neutral300} from '../constants/colors';
// import NftScreen from '../screens/wallet/NftScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const {backgroundColor, fontColor} = useTheme();
  const {i18n} = useAuth();
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

      {/* Enter password */}
      <Stack.Screen
        name={ROUTES.ENTERPASS.ENTRYPASS_SCREEN}
        component={EnterPasscode}
      />
      <Stack.Screen
        options={({
          route: {
            params: {title, uri},
          },
        }) => ({title: title})}
        name={ROUTES.EXPLORE.WEB}
        component={WebScreen}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          title: i18n.sendNFT,
        }}
        name={ROUTES.ACTION.ACTION_SCREEN}
        component={ActionInfoBorder}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
