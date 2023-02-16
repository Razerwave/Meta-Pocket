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
  ReceiveUSDTScreen,
  SendBTCScreen,
  SendNftAuthScreen,
  SendNftScreen,
  StakingBTCScreen,
  SwapBTCScreen,
  SwapScreen,
} from '../screens/wallet';
import BTCHistoryScreen from '../screens/wallet/BTCHistoryScreen';
import { useAuth } from '../context/AuthContext';
import StakingBTCScreen2 from '../screens/wallet/StakingBTCScreen2';

const Stack = createNativeStackNavigator();

const WalletNavigation = () => {
  const { i18n } = useAuth()
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
      <Stack.Screen name={ROUTES.WALLET.HOME} component={WalletScreen} />
      <Stack.Screen
        name={ROUTES.WALLET.PORTFOLIO}
        component={PortfolioScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.notice }}
        name={ROUTES.WALLET.NOTICE}
        component={NoticeScreen}
      />

      <Stack.Screen name={ROUTES.WALLET.BTC_INFO} component={BTCScreen} />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.sendMoney }}
        name={ROUTES.WALLET.BTC_HISTORY}
        component={BTCHistoryScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.sendBtc }}
        name={ROUTES.WALLET.BTC_SEND}
        component={SendBTCScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.receiveBtc }}
        name={ROUTES.WALLET.BTC_RECEIVE}
        component={ReceiveBTCScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.receiveUSDT }}
        name={ROUTES.WALLET.BTC_RECEIVE_USDT}
        component={ReceiveUSDTScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.swapBtc }}
        name={ROUTES.WALLET.BTC_SWAP}
        component={SwapBTCScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.stackingBtc }}
        name={ROUTES.WALLET.BTC_STAKING}
        component={StakingBTCScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.stackingBtc }}
        name={ROUTES.WALLET.BTC_STAKING_2}
        component={StakingBTCScreen2}
      />

      <Stack.Screen name={ROUTES.WALLET.NFT_INFO} component={NftScreen} />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.loadNFT }}
        name={ROUTES.WALLET.NFT_LOAD}
        component={LoadNftScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.sendNFT }}
        name={ROUTES.WALLET.NFT_SEND}
        component={SendNftScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, title: i18n.sendNFT }}
        name={ROUTES.WALLET.NFT_SEND_AUTH}
        component={SendNftAuthScreen}
      />

      <Stack.Screen
        options={{headerShown: true, title: 'Swap'}}
        name={ROUTES.WALLET.SWAP}
        component={SwapScreen}
      />
    </Stack.Navigator>
  );
};

export default WalletNavigation;
