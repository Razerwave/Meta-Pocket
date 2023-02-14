import React, {useRef, useState, useEffect} from 'react';
import {AppState, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ROUTES} from '../../constants/index';
import {useTheme} from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  BodyText,
  FixedThemeWrapper,
  LayoutScreen,
  LayoutScroll,
  Stack,
  StyledText,
  WalletTotalBalance,
} from '../../components';
import {DarkTheme} from '../../constants/index';

const WalletScreen = ({navigation}) => {
  const {fontColor, activeTintColor, backgroundColor} = useTheme();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  return (
    <LayoutScreen
      statusBar={{
        backgroundColor: DarkTheme.backgroundColor,
        colorStyle: DarkTheme.statusBarStyle,
      }}>
      <FixedThemeWrapper dark>
        <View
          style={{
            backgroundColor: DarkTheme.backgroundCardColor,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
          }}>
          <BodyText type={2}>Wallet</BodyText>
          <WalletTotalBalance />
        </View>
      </FixedThemeWrapper>
      <LayoutScroll>
        <Stack
          spacing={16}
          padding={16}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: fontColor,
              gap: 16,
              padding: 12,
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderWidth: 1,
                borderColor: fontColor,
              }}></View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: 'gray',
                paddingHorizontal: 8,
              }}>
              <StyledText>ALEO Metaverse Coming Soon​</StyledText>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', gap: 16}}>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 8,
                  backgroundColor: fontColor,
                }}></View>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 8,
                  backgroundColor: 'gray',
                }}></View>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 8,
                  backgroundColor: 'gray',
                }}></View>
            </View>
          </View>
          <Tabs fontColor={fontColor} activeTintColor={activeTintColor} />
          {[1, 2, 3].map((_, index) => (
            <ListItem key={index} fontColor={fontColor} />
          ))}
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

const Tabs = ({fontColor, activeTintColor}) => {
  const [tab, setTab] = useState(0);
  return (
    <Stack direction="row" spacing={8}>
      {['Tokens', 'NFTs'].map((text, index) => {
        const isActive = tab === index;
        return (
          <TouchableOpacity key={index} onPress={() => setTab(index)}>
            <View
              style={[
                {paddingHorizontal: 12, borderWidth: 1, borderColor: fontColor},
                isActive && {
                  borderBottomWidth: 3,
                  borderBottomColor: activeTintColor,
                },
              ]}>
              <StyledText
                style={[
                  {fontWeight: 'bold'},
                  isActive && {color: activeTintColor},
                ]}>
                {text}
              </StyledText>
            </View>
          </TouchableOpacity>
        );
      })}
    </Stack>
  );
};

const ListItem = ({fontColor}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: fontColor,
        gap: 16,
        padding: 12,
        paddingBottom: 4,
      }}>
      <View
        style={{
          height: 40,
          width: 40,
          borderWidth: 1,
          borderColor: fontColor,
        }}></View>
      <Stack style={{flex: 1}}>
        <Stack direction="row" style={{borderWidth: 1, borderColor: 'gray'}}>
          <StyledText style={{fontWeight: 'bold', paddingHorizontal: 8}}>
            BTC
          </StyledText>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <StyledText style={{fontWeight: 'bold', paddingHorizontal: 8}}>
              0.3
            </StyledText>
          </View>
        </Stack>
        <Stack direction="row">
          <Text
            style={{
              color: 'gray',
              borderWidth: 1,
              borderTopWidth: 0,
              borderColor: 'gray',
              paddingHorizontal: 8,
            }}>
            Bitcoin
          </Text>
        </Stack>
        <View
          style={{
            borderColor: 'gray',
            width: '100%',
            borderTopWidth: 1,
            marginVertical: 4,
          }}
        />
        <Stack direction="row">
          <StyledText
            style={{borderWidth: 1, borderColor: 'gray', paddingHorizontal: 8}}>
            $ 18.882
          </StyledText>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text
              style={{
                color: 'gray',
                borderWidth: 1,
                borderColor: 'gray',
                paddingHorizontal: 8,
              }}>
              +3.40%
            </Text>
          </View>
        </Stack>
      </Stack>
    </View>
  );
};
export default WalletScreen;
