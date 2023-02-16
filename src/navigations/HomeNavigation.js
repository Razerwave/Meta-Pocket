import React from 'react';
import { StyleSheet, AppState, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useThemeChange } from '../context/ThemeChangeContext';
import { LayoutHeader, TabBarBottom } from '../components';
import { useTheme } from 'styled-components';
import { ROUTES } from '../constants';
import {
  DappScreen,
  ExploreScreen,
  InvestScreen,
  SettingScreen,
  WalletScreen,
} from '../screens/home';
import { IconDapp, IconExplore, IconMore, IconWallet } from '../assets/icons';
import SettingNavigation from './SettingNavigation';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  const { backgroundColor, fontColor } = useTheme();

  return (
    <Tab.Navigator
      tabBar={props => <TabBarBottom {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor,
        },
        header: ({ options }) => <LayoutHeader {...options} />,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          const tabName = route.name;
          if (tabName === ROUTES.HOME.WALLET) {
            return <IconWallet color={color} />;
          } else if (tabName === ROUTES.HOME.EXPLORE) {
            return <IconExplore color={color} />;
          } else if (tabName === ROUTES.HOME.DAPP) {
            return <IconDapp color={color} />;
          }

          return <IconMore color={color} />;
        },
      })}>
      <Tab.Screen
        options={{ title: 'Wallet' }}
        name={ROUTES.HOME.WALLET}
        component={WalletScreen}
      />
      <Tab.Screen
        options={{ headerShown: true, title: 'Explore' }}
        name={ROUTES.HOME.EXPLORE}
        component={ExploreScreen}
      />
      <Tab.Screen
        options={{ title: 'Dapp', headerShown: true }}
        name={ROUTES.HOME.DAPP}
        component={DappScreen}
      />
      <Tab.Screen
        options={{ title: 'More' }}
        name={ROUTES.HOME.SETTING}
        component={SettingNavigation}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
