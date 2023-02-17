import React from 'react';
import {StyleSheet, AppState, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useThemeChange} from '../context/ThemeChangeContext';
import {LayoutHeader, TabBarBottom} from '../components';
import {useTheme} from 'styled-components';
import {ROUTES} from '../constants';
import {
  DappScreen,
  ExploreScreen,
  InvestScreen,
  SettingScreen,
  WalletScreen,
} from '../screens/home';
import {IconDapp, IconExplore, IconMore, IconWallet} from '../assets/icons';
import SettingNavigation from './SettingNavigation';
import WalletNavigation from './WalletNavigation';
import ExploreNavigation from './ExploreNavigation';
import {useAuth} from '../context/AuthContext';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  const {backgroundColor, fontColor} = useTheme();
  const {i18n} = useAuth();

  return (
    <Tab.Navigator
      tabBar={props => <TabBarBottom {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor,
        },
        header: ({options}) => <LayoutHeader {...options} />,
        tabBarIcon: ({color}) => {
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
        options={{title: i18n.wallet}}
        name={ROUTES.HOME.WALLET}
        component={WalletNavigation}
      />
      <Tab.Screen
        options={{title: i18n.explore}}
        name={ROUTES.HOME.EXPLORE}
        component={ExploreNavigation}
      />
      <Tab.Screen
        options={{title: i18n.dapp, headerShown: true}}
        name={ROUTES.HOME.DAPP}
        component={DappScreen}
      />
      <Tab.Screen
        options={{title: i18n.more}}
        name={ROUTES.HOME.SETTING}
        component={SettingNavigation}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
