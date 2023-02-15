import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native';
import { BodyHeading, BodyText, ButtonPrimary, FixedThemeWrapper, LayoutHeader, LayoutScreen, LayoutScroll, Stack } from '../../components'
import { DarkTheme, ROUTES } from '../../constants';
import { neutral100, neutral300 } from '../../constants/colors';

const NftScreen = ({ route, navigation }) => {
  const { statusBarStyle, fontColor } = DarkTheme;
  const item = route.params.item;

  return (
    <LayoutScreen statusBar={{ backgroundColor: neutral300, colorStyle: statusBarStyle }}>
      <LayoutScroll>
        <FixedThemeWrapper dark style={{ backgroundColor: neutral300 }}>
          <LayoutHeader
            title={item.name}
            headerStyle={{ backgroundColor: neutral300 }}
            headerTitleStyle={{ color: fontColor }}
          />
          <Stack alignItems="center" marginTop={14} marginBottom={33} style={{ backgroundColor: neutral300 }}>
            <Image style={{ width: 160, height: 160 }} source={item.image} />
            <BodyHeading type={5} style={{ textTransform: 'capitalize', marginTop: 25, color: fontColor }}>
              {item.type}
            </BodyHeading>
            <BodyText type={3} style={{ marginTop: 10, color: item.typeColor }}>
              #{item.code}
            </BodyText>
          </Stack>
        </FixedThemeWrapper>

        
        <ButtonPrimary title="Buy" onPress={() => navigation.navigate(ROUTES.SENDNFT.SENDNFT_SCREEN)} />
        
      </LayoutScroll>
    </LayoutScreen>
  )
}

export default NftScreen

const styles = StyleSheet.create({})