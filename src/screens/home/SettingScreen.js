import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { useTheme } from 'styled-components';
import { ROUTES } from '../../constants';
import { useAuth } from '../../context/AuthContext';
import {
  ButtonPrimary,
  CardBox,
  CustomSelect,
  Divider,
  HeaderTitle,
  HomeScreen,
  LayoutScreen,
  Screen,
  LayoutScroll,
  Stack,
  StyledText,
  SubTitle,
  ListItem,
} from '../../components';
import {
  IconArrowForward,
  IconCopy2,
  IconFacebook,
  IconInstagram,
  IconPerson,
  IconTwitter,
  IconYoutube,
} from '../../assets/icons';
import { MoreData } from '../../constants/ListData';
const { langSelectData, MyUID } = MoreData

const SettingScreen = ({ navigation }) => {
  const { logout, isDarkTheme, toggleTheme, i18n, changeLanguage, lang, showToast } =
    useAuth();
  const { fontColor, activeTintColor } = useTheme();

  const logoutHandler = () => {
    logout();
  };

  const handleCopyUID = (text) => {
    showToast({ text: i18n.copiedToClipBoard, type: 'success', fromTop: 50 });
    Clipboard.setString(text);
  }

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack marginHorizontal={24} marginTop={20} spacing={20}>
          <SubTitle>{i18n.general}</SubTitle>
          <ListItem
            label={i18n.myUID}
            icon={<IconPerson />}
            onPress={() => handleCopyUID(MyUID)}>
            <Stack direction='row' spacing={8} alignItems="center">
              <StyledText>{MyUID}</StyledText>
              <IconCopy2 />
            </Stack>
          </ListItem>
          <ListItem
            label={i18n.resetPassCode}
            icon={<IconPerson />}
            onPress={() => navigation.navigate(ROUTES.SETTING.RESET_PASSCODE)}>
            <IconArrowForward />
          </ListItem>
          <ListItem
            label="KYC"
            icon={<IconPerson />}
            onPress={() =>
              navigation.navigate(ROUTES.SETTING.EMAIL_VERIFICATION)
            }>
            <IconArrowForward />
          </ListItem>
          <ListItem
            label={i18n.referralUID}
            icon={<IconPerson />}
            onPress={() => navigation.navigate(ROUTES.SETTING.REFERRAL)}>
            <IconArrowForward />
          </ListItem>
          <Divider />
          <ListItem label="Language" icon={<IconPerson />} style={{ zIndex: 1 }}>
            <CustomSelect
              value={lang}
              data={langSelectData}
              onChange={item => changeLanguage({ lang: item.value })}
              selectedWrapperStyle={{ minWidth: 35 }}
            />
          </ListItem>
          <ListItem label={i18n.darkMode} icon={<IconPerson />}>
            <Switch
              style={{ flex: 1 }}
              trackColor={{ false: 'lightgray', true: activeTintColor }}
              thumbColor={'gray'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleTheme}
              value={isDarkTheme}
            />
          </ListItem>
          <Divider />
          <SubTitle>{i18n.information}</SubTitle>
          <ListItem
            label={i18n.notice}
            icon={<IconPerson />}
            onPress={() => navigation.navigate(ROUTES.SETTING.NOTICE_LIST)}>
            <IconArrowForward />
          </ListItem>
          <ListItem label={i18n.version} icon={<IconPerson />}>
            <StyledText>1.0.0</StyledText>
          </ListItem>
          <Divider />
          <SubTitle>{i18n.community}</SubTitle>
          <ListItem label={i18n.helpCenter} icon={<IconPerson />}>
            <StyledText>support@metapocket.com</StyledText>
          </ListItem>
          <ListItem label="SNS" icon={<IconPerson />}>
            <Stack direction="row" spacing={8}>
              <IconFacebook />
              <IconInstagram />
              <IconTwitter />
              <IconYoutube />
            </Stack>
          </ListItem>
          <Stack spacing={32}>
            <ButtonPrimary title="Logout" onPress={logoutHandler} />
          </Stack>
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

export default SettingScreen;
