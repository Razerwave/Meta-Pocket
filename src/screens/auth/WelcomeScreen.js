import React, {useRef, useState} from 'react';
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
import {SvgXml} from 'react-native-svg';
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
import {ROUTES} from '../../constants';
import LogoBig from '../../assets/LogoBig';
import {useAuth} from '../../context/AuthContext';

const WelcomeScreen = ({navigation}) => {
  const {i18n} = useAuth();
  return (
    <LayoutScreen>
      <LayoutCenter>
        <LogoBig />
      </LayoutCenter>
      <LayoutBottom>
        <ButtonPrimary
          title={i18n.createNewWallet}
          onPress={() => navigation.navigate(ROUTES.AUTH.BACKUP_WALLET)}
          style={{marginBottom: 20}}
        />
        <ButtonText
          onPress={() => navigation.navigate(ROUTES.AUTH.RECOVER_WALLET)}>
          {i18n.iHaveAlreadyWallet}
        </ButtonText>
      </LayoutBottom>
    </LayoutScreen>
  );
};

export default WelcomeScreen;
