import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
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
import { green200, neutral300, red, white } from '../../constants/colors';

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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
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

      <TouchableOpacity onPress={() => navigate(ROUTES.SETTING.NOTICE, { title: 'ALEO Metaverse Coming Soon' })} >
        <NoticeCard title={'ALEO Metaverse Coming Soon'} />
      </TouchableOpacity>
    </Stack>
  );
};

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

const ImageURI = require('../../assets/images/Bitcoin.png')

const ListItem = () => {
  return (
    <Stack direction='row' spacing={10} style={{ height: 50 }} alignItems="center">
      <Image source={ImageURI} />
      <Stack>
        <BodyText style={{ fontWeight: '600' }}>
          BTC
          <BodyText style={{ fontSize: 10, fontWeight: '400', color: neutral300, marginLeft: 10 }}>   Bitcoin</BodyText>
        </BodyText>
        <BodyText>$ 18,888</BodyText>
      </Stack>
      <Stack style={{ flex: 1, alignItems: 'flex-end' }}>
        <BodyText>0.3</BodyText>
        <BodyText style={{ fontSize: 10, color: green200, fontWeight: '600' }}>+3.40%</BodyText>
      </Stack>
    </Stack>
  );
};

export default WalletScreen;
