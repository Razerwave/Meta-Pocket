import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {CreatePassword, LoginScreen, Terms, ReEntryPassword } from "./index";
import { ROUTES } from '../constants';

const Tab = createNativeStackNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
            <Tab.Screen name={ROUTES.LOGIN_SCREEN}component={LoginScreen} />
            <Tab.Screen name={ROUTES.CREATE_PASSWORD} component={CreatePassword} />
            <Tab.Screen name={ROUTES.TERMS_SCREEN} component={Terms} />
            <Tab.Screen name={ROUTES.RENTRYPASSWORD} component={ReEntryPassword} />
    </Tab.Navigator>
  )
}

export default Main
