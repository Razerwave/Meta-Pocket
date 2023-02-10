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
import {
  LayoutScreen,
  ButtonPrimary,
  LayoutBottom,
  Paginator,
  Screen,
  Stack,
  StyledText,
} from '../../components';
import { ROUTES } from '../../constants';

const WelcomeScreen = ({ navigation }) => {
  return (
    <LayoutScreen>
      <LayoutBottom>
        <ButtonPrimary
          title="Create New Wallet"
          onPress={() => navigation.navigate(ROUTES.AUTH.BACKUP_WALLET)}
          style={{ marginBottom: 20 }}
        />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.AUTH.RECOVER_WALLET)}>
            <StyledText style={{ fontSize: 14, lineHeight: 21 }}>
              I already have a wallet
            </StyledText>
          </TouchableOpacity>
        </View>
      </LayoutBottom>
    </LayoutScreen>
  );
};

export default WelcomeScreen;
