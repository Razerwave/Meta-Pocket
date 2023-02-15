import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { BodyHeading, BodyText, ButtonIcon, FixedThemeWrapper, LayoutHeader, LayoutScreen, LayoutScroll, Stack } from '../../components'
import { DarkTheme, ROUTES } from '../../constants';
import { currency } from '../../utils/formats';
import { IconReceive, IconSend, IconStaking, IconSwap } from '../../assets/icons';

const BTCScreen = ({ route, navigation }) => {
  const { backgroundColor, statusBarStyle, fontColor } = DarkTheme;
  const item = route.params.item;

  return (
    <LayoutScreen statusBar={{ backgroundColor: backgroundColor, colorStyle: statusBarStyle }}>
      <FixedThemeWrapper dark style={{ backgroundColor: backgroundColor }}>
        <LayoutHeader
          title={item.name}
          headerStyle={{ backgroundColor: backgroundColor }}
          headerTitleStyle={{ color: fontColor }}
        />
        <Stack alignItems="center" marginTop={32} marginBottom={33}>
          <Stack direction="row" alignItems="center" spacing={10}>
            <Image source={item.image} />
            <BodyHeading type={4} style={{ textTransform: 'capitalize' }}>
              {item.percent} {item.name}
            </BodyHeading>
          </Stack>
          <BodyText type={3}>
            ${currency(item.amount)}
          </BodyText>
          <Stack direction="row" spacing={20} marginTop={40}>
            <ButtonIcon icon={<IconSend />} onPress={() => navigation.navigate(ROUTES.SENDBTC.SENDBTC_SCREEN, { item })}>
              Send
            </ButtonIcon>
            <ButtonIcon icon={<IconReceive />} onPress={() => navigation.navigate(ROUTES.SENDBTC.SENDBTC_SCREEN, { item })}>
              Receive
            </ButtonIcon>
            <ButtonIcon icon={<IconSwap />} onPress={() => navigation.navigate(ROUTES.SENDBTC.SENDBTC_SCREEN, { item })}>
              Swap
            </ButtonIcon>
            <ButtonIcon icon={<IconStaking />} onPress={() => navigation.navigate(ROUTES.SENDBTC.SENDBTC_SCREEN, { item })}>
              Staking
            </ButtonIcon>
          </Stack>
        </Stack>
      </FixedThemeWrapper>
      <LayoutScroll>

      </LayoutScroll>
    </LayoutScreen>
  )
}

export default BTCScreen

const styles = StyleSheet.create({})