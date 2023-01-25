import React from 'react';
import { StyleSheet, AppState, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DappScreen, ExploreScreen, InvestScreen, SettingScreen, WalletScreen} from "../screens/index";
import IonIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Home = () => {

  
  return (
        <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 90,
        },
      }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if(route.name === "Wallet"){
              iconName = focused ? "wallet-outline" : "wallet";
            } else if(route.name === "Explore"){
              iconName = focused ? "ios-search" : "ios-search-circle";
            } else if(route.name === "Invest"){
              iconName = focused ? "logo-bitcoin"  : "logo-bitcoin";
            } else if(route.name === "Dapp"){
              iconName = focused ? "apps-outline"  : "apps";
            } else if(route.name === "Setting"){
              iconName = focused ? "settings-outline"  : "settings";
            }

            return <IonIcon name={iconName} size={size} colour={colour} />
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
const styles = StyleSheet.create({
    homebtn: {
        width: '100%'
    },

    veiewStyle: {
        width: '100%',
        margin: 30,
    }
})
export default Home;
