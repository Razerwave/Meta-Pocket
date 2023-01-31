import React, { useRef, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components'
import { MiningInfoScreen, MiningSwapScreen } from '../screens/invest';
import { ExploreListScreen, PasscodeReEnterScreen, PasscodeResetScreen } from '../screens/setting';
import { ROUTES } from '../constants';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const { backgroundColor, fontColor } = useTheme()
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor,
        },
        headerTintColor: fontColor,
      }}
    >
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeNavigation} />
      {/* INVEST */}
      <Stack.Screen options={{ title: 'Minning Swap' }} name={ROUTES.INVEST.MINNING_SWAP} component={MiningSwapScreen} />
      <Stack.Screen options={{ title: '0x1234kdsfklsajdf' }} name={ROUTES.INVEST.MINNING_INFO} component={MiningInfoScreen} />
      {/* SETTING */}
      <Stack.Screen options={{ title: '' }} name={ROUTES.SETTING.PASSCODE_RESET} component={PasscodeResetScreen} />
      <Stack.Screen options={{ title: '' }} name={ROUTES.SETTING.PASSCODE_RE_ENTER} component={PasscodeReEnterScreen} />
      {/* EXPLORE */}
      <Stack.Screen options={{ title: '' }} name={ROUTES.EXPLORE.LIST_SCREEN} component={ExploreListScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigation
