import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ROUTES } from '../../constants/index';
import { useTheme } from 'styled-components';
import {
  BodyText,
  FixedThemeWrapper,
  LayoutScreen,
  LayoutScroll,
  Stack,
  StyledText,
  WalletTotalBalance,
} from '../../components';
import { DarkTheme } from '../../constants/index';
import NoticeCard from '../../components/NoticeCard';

const WalletScreen = ({ navigation }) => {
  const { fontColor } = useTheme();

  return (
    <LayoutScreen statusBar={{ backgroundColor: DarkTheme.backgroundColor, colorStyle: DarkTheme.statusBarStyle }}>
      <FixedThemeWrapper dark>
        <TopSection navigate={(route, props) => navigation.navigate(route, props)} />
      </FixedThemeWrapper>
      <Tabs />
      <LayoutScroll>
        <Stack marginTop={10} marginHorizontal={16}>
          {[1, 2, 3].map((_, index) => (
            <ListItem key={index} fontColor={fontColor} />
          ))}
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

const TopSection = ({ navigate }) => {
  return (
    <Stack marginBottom={20}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <BodyText type={2}>Wallet</BodyText>
        <WalletTotalBalance onPress={() => navigate(ROUTES.WALLET.PORTFOLIO)} />
      </View>

      <NoticeCard title={'ALEO Metaverse Coming Soon'} />
    </Stack>
  )
}

const Tabs = () => {
  const { walletTab: { borderColor, activeColor, inactiveColor } } = useTheme();
  const [tab, setTab] = useState(0);

  return (
    <View style={{
      display: 'flex',
      flexDirection: 'column-reverse',
      height: 57,
      borderBottomWidth: 1,
      borderColor: borderColor,
    }}>
      <Stack direction="row" marginHorizontal={16}>
        {['Tokens', 'NFTs'].map((text, index) => {
          const isActive = tab === index;
          return (
            <TouchableOpacity key={index} onPress={() => setTab(index)}>
              <BodyText type={3} style={{
                fontWeight: '600',
                minWidth: 66,
                textAlign: 'center',
                paddingBottom: 5,
                color: isActive ? activeColor : inactiveColor,
              }}>
                {text}
              </BodyText>
              <View style={isActive && {
                borderRadius: 9999,
                borderWidth: 1,
                borderColor: activeColor,
              }} />
            </TouchableOpacity>
          );
        })}
      </Stack>
    </View>
  );
};

const ListItem = ({ fontColor }) => {
  return (
    <Stack direction='row'>
      <View style={{}} />
      <Stack direction="row" style={{ borderWidth: 1, borderColor: 'gray' }}>
        <StyledText style={{ fontWeight: 'bold', paddingHorizontal: 8 }}>
          BTC
        </StyledText>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <StyledText style={{ fontWeight: 'bold', paddingHorizontal: 8 }}>
            0.3
          </StyledText>
        </View>
      </Stack>
    </Stack>
  );
};
export default WalletScreen;
