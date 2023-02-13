import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {WebView} from 'react-native-webview';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  AppStatusBar,
  ButtonPrimary,
  CardBox,
  Divider,
  HomeScreen,
  LayoutScreen,
  LayoutScroll,
  Stack,
  StyledText,
} from '../../components';
import {useTheme} from 'styled-components';
import {ROUTES} from '../../constants';
import WebScreen from '../WebScreen';

import {links, testData} from '../../constants/ListData';
import {IconColorDot, IconExploreArrow} from '../../assets/icons';
import {DarkTheme} from '../../constants';
import {blackBlue2} from '../../constants/colors';

const BuyItem = ({navigation, route}) => {
  const {fontColor} = useTheme();
  const [data, setData] = useState([]);
  const item = route.params.item;
  console.log(item, ' =====');

  return (
    <LayoutScreen>
      <AppStatusBar barColor={blackBlue2} barStyle="light-content" />
      <LayoutScroll>
        <Stack
          padding={16}
          style={{
            backgroundColor: blackBlue2,
            marginBottom: 31,
          }}>
          <Stack style={{alignItems: 'center'}}>
            <Image style={{width: 160, height: 160}} source={item.image} />
            <StyledText
              style={{marginTop: 20, marginBottom: 10, color: fontColor}}>
              {item.name}
            </StyledText>
            <StyledText style={{marginBottom: 33}}>{item.author}</StyledText>
          </Stack>
        </Stack>
        <Stack marginHorizontal={41} spacing={15} style={{}}>
          <Divider></Divider>
          <Stack direction="row" style={{justifyContent: 'space-between'}}>
            <StyledText>Name</StyledText>
            <StyledText>Shoes #748</StyledText>
          </Stack>
          <Stack direction="row" style={{justifyContent: 'space-between'}}>
            <StyledText>From</StyledText>
            <StyledText>0xe34lkjds....7BEsdlkfjls</StyledText>
          </Stack>
          <Stack direction="row" style={{justifyContent: 'space-between'}}>
            <StyledText>To</StyledText>
            <StyledText>0x333lksdf..sdflEDFWe</StyledText>
          </Stack>
          <Divider></Divider>
          <Stack direction="row" style={{justifyContent: 'space-between'}}>
            <StyledText>Fee</StyledText>
            <StyledText>0.0001 BTC (≈$0.1)</StyledText>
          </Stack>
          <Divider></Divider>
          <Stack direction="row" style={{justifyContent: 'space-between'}}>
            <StyledText>Total</StyledText>
            <StyledText>$200.1</StyledText>
          </Stack>
          <Divider></Divider>

          <Stack>
            <ButtonPrimary title="Buy" />
          </Stack>
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

export default BuyItem;
