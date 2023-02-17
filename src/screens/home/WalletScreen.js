import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { ROUTES } from '../../constants/index';
import { useTheme } from 'styled-components';
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
import { DarkTheme } from '../../constants/index';
import NoticeCard from '../../components/NoticeCard';

// TEST DATA
import { WalletHomeData } from '../../constants/ListData';
import { black, green200, neutral100, purple100, red, white } from '../../constants/colors';
import { currency } from '../../utils/formats';
import { useAuth } from '../../context/AuthContext';
import Carousel from 'react-native-reanimated-carousel';

const TAB_ROUTES = [
  { key: 'Tokens', title: 'Tokens' },
  { key: 'NFTs', title: 'NFTs' },
]

const WalletScreen = ({ navigation }) => {
  const { i18n } = useAuth()
  const { walletTab } = useTheme()
  const [tab, setTab] = useState(0)
  const [total, setTotal] = useState(0);
  const [noticeList, setNoticeList] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const {total, tokens, nfts, notice} = WalletHomeData
    setTotal(total)
    setNoticeList(notice)
    setTokens(tokens)
    setNFTs(nfts)

  }, [])

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'Tokens':
        return <TokenTab
          data={tokens}
          onPress={(item) => navigation.navigate(ROUTES.WALLET.BTC_INFO, { item })}
        />;
      case 'NFTs':
        return <NFTTab
          data={nfts}
          onPress={(item) => navigation.navigate(ROUTES.WALLET.NFT_INFO, { item })}
          onPressScroll={() => navigation.navigate(ROUTES.WALLET.NFT_LOAD)}
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
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
            <BodyText type={2}>{i18n.wallet}</BodyText>
            <WalletTotalBalance
              total={total}
              onPress={() => navigation.navigate(ROUTES.WALLET.PORTFOLIO)}
            />
          </View>

          <View style={{ height: 60 }}>
            <Banners noticeList={noticeList} navigation={navigation} />
          </View>
        </Stack>
      </FixedThemeWrapper>
      <CustomTabs
        tabIndex={tab}
        onTabChange={setTab}
        tabRoutes={TAB_ROUTES}
        renderScene={renderScene}
        tabColors={walletTab}
      />
    </LayoutScreen>
  );
};

const Banners = ({ noticeList = [], navigation }) => {
  const width = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={60}
        autoPlay={true}
        data={[...new Array(noticeList.length).keys()]}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => {
          const { imagePath, title } = noticeList[index]
          return (
            <View style={{ flex: 1, marginHorizontal: 16, justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate(ROUTES.WALLET.NOTICE, {
                imagePath,
                title
              })}>
                <NoticeCard imagePath={imagePath} title={title} />
              </TouchableOpacity>
              <View style={{
                position: 'absolute',
                right: 10,
                top: 10,
                paddingVertical: 3,
                paddingHorizontal: 5,
                backgroundColor: black,
                borderRadius: 9999,
              }}>
                <BodyText type={7}>
                  {index + 1}/{noticeList.length}
                </BodyText>
              </View>
            </View>
          )
        }}
      />
    </View>
  );
}

const TokenTab = ({ data = [], onPress = () => { } }) => {
  return (
    <LayoutScroll bottomGap={30}>
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
  const { i18n } = useAuth()
  return (
    <LayoutScroll button={i18n.loadNFT} onPress={onPressScroll}>
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
      </Stack>
    </LayoutScroll >
  );
};

export default WalletScreen;
