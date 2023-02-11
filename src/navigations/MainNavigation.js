import React, { useRef, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import { MiningInfoScreen, MiningSwapScreen } from '../screens/invest';
import { ConfirmResetPasscode, ResetPasscode } from '../screens/setting';
import { ExploreListScreen } from '../screens/Explore';
import { WebScreen } from '../screens';
import { ROUTES } from '../constants';
import HomeNavigation from './HomeNavigation';
import { LayoutHeader } from '../components';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
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
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeNavigation}
      />
      {/* INVEST */}
      <Stack.Screen
        options={{ title: 'Minning Swap' }}
        name={ROUTES.INVEST.MINNING_SWAP}
        component={MiningSwapScreen}
      />
      <Stack.Screen
        options={{ title: '0x1234kdsfklsajdf' }}
        name={ROUTES.INVEST.MINNING_INFO}
        component={MiningInfoScreen}
      />
      {/* SETTING */}
      <Stack.Screen
        options={{ title: '' }}
        name={ROUTES.SETTING.RESET_PASSCODE}
        component={ResetPasscode}
      />
      <Stack.Screen
        options={{ title: '' }}
        name={ROUTES.SETTING.PASSCODE_RE_ENTER}
        component={ConfirmResetPasscode}
      />
      {/* EXPLORE */}
      <Stack.Screen
        options={{ headerShown: true }}
        name={ROUTES.EXPLORE.LIST_SCREEN}
        component={ExploreListScreen}
      />
      <Stack.Screen
        options={({
          route: {
            params: { title, uri },
          },
        }) => ({ title: title || uri })}
        name={ROUTES.EXPLORE.WEB}
        component={WebScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
