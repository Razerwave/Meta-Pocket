import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  BodyHeading,
  BodyText,
  ButtonIcon,
  ButtonScroll,
  FixedThemeWrapper,
  LayoutHeader,
  LayoutScreen,
  LayoutScroll,
  Stack,
} from '../../components';
import { DarkTheme, ROUTES } from '../../constants';
import { currency } from '../../utils/formats';
import { IconReceive, IconSend, IconStaking, IconSwap } from '../../assets/icons';
import { green200, neutral100, red } from '../../constants/colors';
import { BTC_INFO_DATA } from '../../constants/ListData';
import { useAuth } from '../../context/AuthContext';

const BTCScreen = ({ route, navigation }) => {
  const { i18n } = useAuth()
  const { backgroundColor, statusBarStyle, fontColor } = DarkTheme;
  const item = route.params.item;

  return (
    <LayoutScreen
      statusBar={{
        backgroundColor: backgroundColor,
        colorStyle: statusBarStyle,
      }}>
      <FixedThemeWrapper dark style={{ backgroundColor: backgroundColor }}>
        <LayoutHeader
          title={item.name}
          headerStyle={{ backgroundColor: backgroundColor }}
          headerTitleStyle={{ color: fontColor }}
        />
        <Stack alignItems="center" marginTop={32} marginBottom={33}>
          <Stack direction="row" alignItems="center" spacing={10}>
            <Image style={{ width: 30, height: 30 }} source={item.image} />
            <BodyHeading type={4} textTransform="uppercase">
              {item.percent} {item.name}
            </BodyHeading>
          </Stack>
          <BodyText type={3}>${currency(item.amount)}</BodyText>
          <Stack direction="row" spacing={20} marginTop={40}>
            <ButtonIcon
              borderColor={neutral100}
              icon={<IconSend />}
              onPress={() =>
                navigation.navigate(ROUTES.WALLET.BTC_SEND, { item })
              }>
              {i18n.send}
            </ButtonIcon>
            <ButtonIcon
              borderColor={neutral100}
              icon={<IconReceive />}
              onPress={() =>
                navigation.navigate(ROUTES.WALLET.BTC_RECEIVE, { item })
              }>
              {i18n.receive}
            </ButtonIcon>
            <ButtonIcon
              borderColor={neutral100}
              icon={<IconSwap />}
              onPress={() =>
                navigation.navigate(ROUTES.WALLET.BTC_SWAP, { item })
              }>
              {i18n.swap}
            </ButtonIcon>
            <ButtonIcon
              borderColor={neutral100}
              icon={<IconStaking />}
              onPress={() =>
                navigation.navigate(ROUTES.WALLET.BTC_STAKING, { item })
              }>
              {i18n.staking}
            </ButtonIcon>
          </Stack>
        </Stack>
      </FixedThemeWrapper>
      <LayoutScroll>
        <Stack spacing={20} marginHorizontal={16} marginTop={30}>
          {BTC_INFO_DATA.map((t, index) => (
            <Stack key={index}>
              <BodyText
                type={7}
                style={{ color: neutral100, marginBottom: 9, marginLeft: 11 }}>
                {t.date}
              </BodyText>
              {t.transactions.map((tr, index) => {
                const isPlus = tr.type === 'received';
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate(ROUTES.WALLET.BTC_HISTORY, {
                        item: tr,
                        data: item,
                      })
                    }>
                    <Stack direction="row" spacing={10} padding={10}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={item.image}
                      />
                      <BodyText textTransform="capitalize">{tr.type}</BodyText>
                      <Stack style={{ flex: 1, alignItems: 'flex-end' }}>
                        <BodyText
                          style={{
                            color: isPlus ? green200 : red,
                            textTransform: 'uppercase',
                          }}>
                          {isPlus ? '+' : '-'} {tr.amount} {item.name}
                        </BodyText>
                      </Stack>
                    </Stack>
                  </TouchableOpacity>
                );
              })}
            </Stack>
          ))}
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

export default BTCScreen;

const styles = StyleSheet.create({});
