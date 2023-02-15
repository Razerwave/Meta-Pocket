import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
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
import {useTheme} from 'styled-components';
import {ROUTES} from '../../constants';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../context/AuthContext';
import {Path, Svg, SvgXml} from 'react-native-svg';
import {
  IconArrowForward,
  IconFacebook,
  IconInstagram,
  IconPerson,
  IconTwitter,
  IconYoutube,
} from '../../assets/icons';

const SettingScreen = ({navigation}) => {
  const {logout, isDarkTheme, toggleTheme} = useAuth();
  const {fontColor, activeTintColor} = useTheme();
  const [language, setLanguage] = useState('KOR');

  const logoutHandler = () => {
    logout();
  };

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack marginHorizontal={24} marginTop={20} spacing={32}>
          <SubTitle>General</SubTitle>
          <ListItem label="My UID" icon={<IconPerson />}>
            <StyledText>123451234512345</StyledText>
          </ListItem>
          <ListItem
            label="Reset Passcode"
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
            <StyledText>test@gmail.com</StyledText>
          </ListItem>
          <ListItem
            label="Referral UID"
            icon={<IconPerson />}
            onPress={() => navigation.navigate(ROUTES.SETTING.REFERRAL)}>
            <IconArrowForward />
          </ListItem>
          <Divider />
          <ListItem label="Language" icon={<IconPerson />}>
            <CustomSelect value={language} onChange={v => setLanguage(v)} />
          </ListItem>
          <ListItem label="Dark Mode" icon={<IconPerson />}>
            <Switch
              style={{flex: 1}}
              trackColor={{false: 'lightgray', true: activeTintColor}}
              thumbColor={'gray'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleTheme}
              value={isDarkTheme}
            />
          </ListItem>
          <Divider />
          <SubTitle>Information</SubTitle>
          <ListItem
            label="Notice"
            icon={<IconPerson />}
            onPress={() => navigation.navigate(ROUTES.SETTING.NOTICE_LIST)}>
            <IconArrowForward />
          </ListItem>
          <ListItem label="Version" icon={<IconPerson />}>
            <StyledText>1.0.0</StyledText>
          </ListItem>
          <Divider />
          <SubTitle>Community</SubTitle>
          <ListItem label="Help Center" icon={<IconPerson />}>
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
            <ButtonPrimary
              title="send NFT"
              onPress={() => {
                navigation.navigate(ROUTES.SENDNFT.SENDNFT_SCREEN);
              }}
            />
          </Stack>
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

export default SettingScreen;
