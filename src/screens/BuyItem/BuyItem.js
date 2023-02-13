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

const BuyItem = ({navigation, route}) => {
  const {fontColor} = useTheme();
  const [data, setData] = useState([]);
  const item = route.params.item;
  console.log(item, ' =====');

  return (
    <View style={{flex: 1, borderWidth: 2, borderColor: 'red'}}>
      <LayoutScroll>
        <Stack
          padding={16}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#262637',
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
        {/* <Stack marginHorizontal={41} spacing={20}>
          <Divider></Divider>
          <StyledText>Name</StyledText>
          <StyledText>From</StyledText>
          <StyledText>To</StyledText>
          <Divider></Divider>
          <StyledText>Fee</StyledText>
          <Divider></Divider>
          <StyledText>Total</StyledText>
          <Divider></Divider>
        </Stack> */}
      </LayoutScroll>
    </View>
  );
};

export default BuyItem;
