import React from 'react';
import { StyleSheet, AppState, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DappScreen, ExploreScreen, InvestScreen, SettingScreen, WalletScreen } from "../screens/index";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useThemeChange } from '../context/ThemeChangeContext';
import { TabBarBottom } from '../components';
import { useTheme } from 'styled-components'

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  const { backgroundColor, fontColor } = useTheme()

  return (
    <Tab.Navigator
      tabBar={props => <TabBarBottom {...props} />}
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor
        },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Wallet") {
            iconName = focused ? "wallet-outline" : "wallet";
          } else if (route.name === "Explore") {
            iconName = focused ? "ios-search" : "ios-search-circle";
          } else if (route.name === "Invest") {
            iconName = focused ? "logo-bitcoin" : "logo-bitcoin";
          } else if (route.name === "Dapp") {
            iconName = focused ? "apps-outline" : "apps";
          } else if (route.name === "Setting") {
            iconName = focused ? "settings-outline" : "settings";
          }

          return <IonIcon name={iconName} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name='Wallet' component={WalletScreen} />
      <Tab.Screen name='Explore' component={ExploreScreen} />
      <Tab.Screen name='Invest' component={InvestScreen} />
      <Tab.Screen name='Dapp' component={DappScreen} />
      <Tab.Screen name='Setting' component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default HomeNavigation;
