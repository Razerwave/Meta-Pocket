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
          const tabName = route.name
          if (tabName === "Wallet") {
            iconName = focused ? "wallet-outline" : "wallet";
          } else if (tabName === "Explore") {
            iconName = focused ? "ios-search" : "ios-search-circle";
          } else if (tabName === "Invest") {
            iconName = "logo-bitcoin";
          } else if (tabName === "Dapp") {
            iconName = focused ? "apps-outline" : "apps";
          } else {
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
