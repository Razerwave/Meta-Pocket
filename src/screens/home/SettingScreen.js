import React from 'react';
import { View, Text, Button, Alert, TouchableOpacity, Switch, ScrollView } from 'react-native';
import {
  ButtonPrimary,
  CardBox,
  Divider,
  HeaderTitle,
  HomeScreen,
  LayoutScreen,
  Screen,
  Stack,
  StyledText,
  SubTitle,
} from '../../components';
import { useTheme } from 'styled-components';
import { ROUTES } from '../../constants';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../context/AuthContext';
import { Path, Svg, SvgXml } from 'react-native-svg';
import { IconArrowForward, IconPerson } from '../../assets/icons';

const SettingScreen = ({ navigation }) => {
  const { logout, isDarkTheme, toggleTheme } = useAuth();
  const { fontColor, activeTintColor } = useTheme();

  const logoutHandler = () => {
    logout();
  };

  return (
    <LayoutScreen>
      <ScrollView>
        <Stack marginHorizontal={24} spacing={32}>
          <SubTitle>
            General
          </SubTitle>
          <ListItem label="My UID" icon={<IconPerson />}>
            <StyledText>123451234512345</StyledText>
          </ListItem>
          <ListItem label="Reset Passcode" icon={<IconPerson />} onPress={() => navigation.navigate(ROUTES.SETTING.RESET_PASSCODE)}>
            <IconArrowForward />
          </ListItem>
          <ListItem label="KYC" icon={<IconPerson />} onPress={() => navigation.navigate(ROUTES.SETTING.EMAIL_VERIFICATION)}>
            <StyledText>test@gmail.com</StyledText>
          </ListItem>
          <ListItem label="Referral UID" icon={<IconPerson />}>
            <IconArrowForward />
          </ListItem>
          <Divider />
          <ListItem label="Language" icon={<IconPerson />}>
            <StyledText>OK</StyledText>
          </ListItem>
          <ListItem label="Dark Mode" icon={<IconPerson />}>
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
          <SubTitle>
            Information
          </SubTitle>
          <ListItem label="Notice" icon={<IconPerson />}>
            <StyledText>1.0.0</StyledText>
          </ListItem>
          <ListItem label="Version" icon={<IconPerson />}>
            <StyledText>1.0.0</StyledText>
          </ListItem>
          <Divider />
          <SubTitle>
            Community
          </SubTitle>
          <ListItem label="Help Center" icon={<IconPerson />}>
            <StyledText>support@metapocket.com</StyledText>
          </ListItem>
          <ListItem label="SNS" icon={<IconPerson />}>
            <StyledText>1.0.0</StyledText>
          </ListItem>
          <Stack spacing={32}>
            <ButtonPrimary title="Logout" onPress={logoutHandler} />
          </Stack>
        </Stack>
      </ScrollView>
    </LayoutScreen>
  );
};

const ListItem = ({ label, icon, children, onPress }) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Stack direction='row' spacing={11}>
        {icon}
        <StyledText>{label}</StyledText>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>{children}</View>
      </Stack>
    </TouchableOpacity>
  );
};

export default SettingScreen;
