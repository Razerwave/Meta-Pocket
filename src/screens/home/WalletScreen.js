import React, { useRef, useState, useEffect } from 'react';
import { AppState, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import useAuth from '../../context/AuthContext';
import { ROUTES } from '../../constants/index';
import { useTheme } from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {
  ButtonPrimary,
  CardBox,
  HomeScreen,
  LayoutScreen,
  LayoutScroll,
  Screen,
  Stack,
  StyledText,
} from '../../components';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Shadow } from 'react-native-shadow-2';

const WalletScreen = ({navigation}) => {
  const { fontColor, primaryColor } = useTheme();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack
          spacing={16}
          padding={16}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <StyledText
            style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Wallet
          </StyledText>

          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.WALLET.PORTFOLIO)}>
            <View
              style={{
                alignItems: 'center',
                width: 140,
                height: 140,
              }}>
              {/* <LinearGradient
            style={{
              width: 140,
              height: 140,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              shadowColor: '#000',
              elevation: 15,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[
              '  rgba(13,11,51,1)',
              ' rgba(135,135,167,1) ',
              'rgba(42,42,154,1) ',
              'transparent',
            ]}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 60,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderColor: fontColor,
                    padding: 3,
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <StyledText style={{fontSize: 10, fontWeight: 'bold'}}>
                    Total value
                  </StyledText>
                  <StyledText style={{fontSize: 20, fontWeight: 'bold'}}>
                    $0.00
                  </StyledText>
                </View>
              </View>
            </View>
          </LinearGradient> */}
              <Shadow
                distance={16}
                startColor={('rgba(9,9,121,1)', 'rgba(9,9,121,1)')}
                endColor={'#ff00ff10'}
                paintInside={false}
                style={{
                  flexDirection: 'row',
                  borderRadius: 100,
                }}>
                <View style={{ alignItems: 'center' }}>
                  <View
                    style={{
                      height: 120,
                      width: 120,
                      borderRadius: 60,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        borderColor: fontColor,
                        padding: 3,
                        flex: 1,
                        alignItems: 'center',
                      }}>
                      <StyledText style={{ fontSize: 10, fontWeight: 'bold' }}>
                        Total value
                      </StyledText>
                      <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
                        $0.00
                      </StyledText>
                    </View>
                  </View>
                </View>
              </Shadow>
            </View>
          </TouchableOpacity>

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
          <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', gap: 16 }}>
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
          <Tabs fontColor={fontColor} primaryColor={primaryColor} />
          {[1, 2, 3].map((_, index) => (
            <ListItem key={index} fontColor={fontColor} />
          ))}
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

const Tabs = ({ fontColor, primaryColor }) => {
  const [tab, setTab] = useState(0);
  return (
    <Stack direction="row" spacing={8}>
      {['Tokens', 'NFTs'].map((text, index) => {
        const isActive = tab === index;
        return (
          <TouchableOpacity key={index} onPress={() => setTab(index)}>
            <View
              style={[
                { paddingHorizontal: 12, borderWidth: 1, borderColor: fontColor },
                isActive && {
                  borderBottomWidth: 3,
                  borderBottomColor: primaryColor,
                },
              ]}>
              <StyledText
                style={[
                  { fontWeight: 'bold' },
                  isActive && { color: primaryColor },
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

const ListItem = ({ fontColor }) => {
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
      <Stack style={{ flex: 1 }}>
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
            style={{ borderWidth: 1, borderColor: 'gray', paddingHorizontal: 8 }}>
            $ 18.882
          </StyledText>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
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
