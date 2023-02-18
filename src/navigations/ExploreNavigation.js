import React from 'react';
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
import {ROUTES} from '../constants';
import {LayoutHeader} from '../components';
import {ExploreScreen, SettingScreen} from '../screens/home';
import {BuyItem, ExploreListScreen} from '../screens/Explore';
import {useAuth} from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const ExploreNavigation = () => {
  const {backgroundColor, fontColor} = useTheme();
  const {i18n} = useAuth();
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.EXPLORE.HOME}
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
        options={{title: i18n.explore}}
        name={ROUTES.EXPLORE.HOME}
        component={ExploreScreen}
      />
      <Stack.Screen
        options={{title: i18n.explore}}
        name={ROUTES.EXPLORE.LIST_SCREEN}
        component={ExploreListScreen}
      />
      <Stack.Screen
        options={{headerShown: false, title: 'Buy Item'}}
        name={ROUTES.EXPLORE.BUY_ITEM}
        component={BuyItem}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigation;
