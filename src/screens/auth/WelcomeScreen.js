import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
  LayoutScreen,
  ButtonPrimary,
  LayoutBottom,
  Paginator,
  Screen,
  Stack,
  StyledText,
  LayoutCenter,
  ButtonText,
} from '../../components';
import { ROUTES } from '../../constants';
import { useTheme } from 'styled-components';
import LogoBig from '../../assets/LogoBig';

const WelcomeScreen = ({ navigation }) => {
  const { fonts: { logoColor } } = useTheme()
  return (
    <LayoutScreen>
      <LayoutCenter>
        <LogoBig fill={logoColor} />
      </LayoutCenter>
      <LayoutBottom>
        <ButtonPrimary
          title="Create New Wallet"
          onPress={() => navigation.navigate(ROUTES.AUTH.BACKUP_WALLET)}
          style={{ marginBottom: 20 }}
        />
        <ButtonText onPress={() => navigation.navigate(ROUTES.AUTH.RECOVER_WALLET)}>
          I already have a wallet
        </ButtonText>
      </LayoutBottom>
    </LayoutScreen>
  );
};

export default WelcomeScreen;
