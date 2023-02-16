import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import {
  ConfirmResetPasscode,
  EmailVerification,
  ResetPasscode,
  Referral,
  NoticeList,
  NoticeScreen,
} from '../screens/setting';
import { ROUTES } from '../constants';
import { LayoutHeader } from '../components';
import { WalletScreen } from '../screens/home';
import {
  BTCScreen,
  LoadNftScreen,
  NftScreen,
  PortfolioScreen,
  ReceiveBTCScreen,
  SendBTCScreen,
  SendNftAuthScreen,
  SendNftScreen,
  StakingBTCScreen,
  SwapBTCScreen,
} from '../screens/wallet';
import BTCHistoryScreen from '../screens/wallet/BTCHistoryScreen';

const Stack = createNativeStackNavigator();

const WalletNavigation = () => {
  const { backgroundColor, fontColor } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ options }) => <LayoutHeader {...options} />,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerTitleStyle: {
          color: fontColor,
        },
        headerTintColor: fontColor,
        headerShown: false,
      }}
      initialRouteName={ROUTES.WALLET.HOME}>
      {/* SETTING */}
      <Stack.Screen name={ROUTES.WALLET.HOME} component={WalletScreen} />
      <Stack.Screen
        name={ROUTES.WALLET.PORTFOLIO}
        component={PortfolioScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: 'Notice' }}
        name={ROUTES.WALLET.NOTICE}
        component={NoticeScreen}
      />

      <Stack.Screen name={ROUTES.WALLET.BTC_INFO} component={BTCScreen} />
      <Stack.Screen
        options={{ headerShown: true, title: 'Send Money' }}
        name={ROUTES.WALLET.BTC_HISTORY}
        component={BTCHistoryScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: 'Send BTC' }}
        name={ROUTES.WALLET.BTC_SEND}
        component={SendBTCScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: 'Receive BTC' }}
        name={ROUTES.WALLET.BTC_RECEIVE}
        component={ReceiveBTCScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: 'Swap BTC' }}
        name={ROUTES.WALLET.BTC_SWAP}
        component={SwapBTCScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: 'Staking BTC' }}
        name={ROUTES.WALLET.BTC_STAKING}
        component={StakingBTCScreen}
      />

      <Stack.Screen name={ROUTES.WALLET.NFT_INFO} component={NftScreen} />
      <Stack.Screen
        options={{ headerShown: true, title: 'Load NFTs' }}
        name={ROUTES.WALLET.NFT_LOAD}
        component={LoadNftScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: 'Send NFT' }}
        name={ROUTES.WALLET.NFT_SEND}
        component={SendNftScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: 'Send NFT' }}
        name={ROUTES.WALLET.NFT_SEND_AUTH}
        component={SendNftAuthScreen}
      />
    </Stack.Navigator>
  );
};

export default WalletNavigation;
