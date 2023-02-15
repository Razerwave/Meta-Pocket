import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {ROUTES} from '../../constants/index';
import {useTheme} from 'styled-components';
import {
  BodyText,
  ButtonScroll,
  CustomTabs,
  ButtonPrimary,
  FixedThemeWrapper,
  LayoutScreen,
  LayoutScroll,
  Stack,
  WalletTotalBalance,
} from '../../components';
import {DarkTheme} from '../../constants/index';
import NoticeCard from '../../components/NoticeCard';
import { green200, neutral100, neutral300, red, white, yellow200, yellow300 } from '../../constants/colors';

// TEST DATA
import { WalletHomeData } from '../../constants/ListData';
import { currency } from '../../utils/formats';

const TAB_ROUTES = [
  { key: 'Tokens', title: 'Tokens' },
  { key: 'NFTs', title: 'NFTs' },
]

const WalletScreen = ({ navigation }) => {
  const [tab, setTab] = useState(0);
import {green200, neutral300, red, white} from '../../constants/colors';

// TEST DATA
import {WalletHomeData} from '../../constants/ListData';

const WalletScreen = ({navigation}) => {
  const {fontColor} = useTheme();
  const [total, setTotal] = useState(0);
  const [notice, setNoticeList] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    setTotal(WalletHomeData.total)
    setNoticeList(WalletHomeData.notice)
    setTokens(WalletHomeData.tokens)
    setNFTs(WalletHomeData.nfts)
  }, [])

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'Tokens':
        return <TokenTab data={tokens} onPress={(item) => navigation.navigate(ROUTES.HOME.WALLET)} />;
      case 'NFTs':
        return <NFTTab
          data={nfts}
          onPress={(item) => navigation.navigate(ROUTES.HOME.WALLET)}
          onPressScroll={() => navigation.navigate()}
        />;
    }
  };

  return (
    <LayoutScreen
      statusBar={{
        backgroundColor: DarkTheme.backgroundColor,
        colorStyle: DarkTheme.statusBarStyle,
      }}>
      <FixedThemeWrapper dark>
        <Stack marginBottom={20}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <BodyText type={2}>Wallet</BodyText>
            <WalletTotalBalance
              total={total}
              onPress={() => navigation.navigate(ROUTES.WALLET.PORTFOLIO)}
            />
          </View>

          {notice.map(({imagePath, title}, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate(ROUTES.SETTING.NOTICE, {title})
              }>
              <NoticeCard imagePath={imagePath} title={title} />
            </TouchableOpacity>
          ))}

          <ButtonPrimary
            title="load ntf"
            onPress={() => navigation.navigate(ROUTES.LOADNFT.LOADNFT_SCREEN)}
          />
        </Stack>
      </FixedThemeWrapper>
      <CustomTabs
        tabIndex={tab}
        onTabChange={setTab}
        tabRoutes={TAB_ROUTES}
        renderScene={renderScene}
        // renderTabBar={(props) => {
        //   console.log("props", props)
        //   return (
        //     <TouchableOpacity key={index} onPress={() => setTab(index)}>
        //       <BodyText type={3} style={{
        //         fontWeight: '600',
        //         minWidth: 66,
        //         textAlign: 'center',
        //         paddingBottom: 5,
        //         color: isActive ? activeColor : inactiveColor,
        //       }}>
        //         {text}
        //       </BodyText>
        //       <View style={isActive && {
        //         borderRadius: 9999,
        //         borderWidth: 1,
        //         borderColor: activeColor,
        //       }} />
        //     </TouchableOpacity>
        //   )
        // }}
      />
    </LayoutScreen>
  );
};

{/* <View style={{
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
</View> */}

const TokenTab = ({ data = [], onPress = () => { } }) => {
  return (
    <LayoutScroll>
      <Stack marginTop={10} marginHorizontal={16}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => onPress(item)}>
            <Stack direction='row' spacing={10} style={{ height: 50 }} alignItems="center">
              <Image style={{ width: 30, height: 30 }} source={item.image} />
              <Stack>
                <BodyText style={{ fontWeight: '600' }}>
                  {item.name}
                  <BodyText style={{ fontSize: 10, fontWeight: '400', color: neutral100, marginLeft: 10 }}>   {item.description}</BodyText>
                </BodyText>
                <BodyText>$ {currency(item.amount)}</BodyText>
              </Stack>
              <Stack style={{ flex: 1, alignItems: 'flex-end' }}>
                <BodyText>{item.percent}</BodyText>
                <BodyText style={{ fontSize: 10, color: green200, fontWeight: '600' }}>+{item.change}%</BodyText>
              </Stack>
            </Stack>
          </TouchableOpacity>
        ))}
      </Stack>
    </LayoutScroll>
  )
}

const NFTTab = ({ data = [], onPress = () => { }, onPressScroll = () => { } }) => {
  return (
    <LayoutScroll>
      <Stack marginTop={10} marginHorizontal={16} spacing={30}>
        <Stack>
          {data.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => onPress(item)}>
              <Stack direction='row' spacing={10} style={{ height: 50 }} alignItems="center">
                <Image style={{ width: 30, height: 30 }} source={item.image} />
                <Stack>
                  <BodyText>
                    {item.name}
                  </BodyText>
                  <BodyText style={{ fontSize: 10, fontWeight: '400', color: neutral100 }}>
                    {item.memberType}
                  </BodyText>
                </Stack>
                <Stack style={{ flex: 1, alignItems: 'flex-end' }}>
                  <BodyText type={3} style={{ textTransform: 'capitalize', color: item.typeColor }}>
                    {item.type}
                  </BodyText>
                  <BodyText style={{ fontSize: 10, fontWeight: '400', color: neutral100 }}>
                    #{item.code}
                  </BodyText>
                </Stack>
              </Stack>
            </TouchableOpacity>
          ))}
        </Stack>
        <Stack alignItems="center">
          <ButtonScroll onPress={onPressScroll}>
            Load NFTs
          </ButtonScroll>
        </Stack>
      </Stack>
    </LayoutScroll >
  );
};

export default WalletScreen;
