import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import {
  BodyHeading,
  BodyText,
  ButtonPrimary,
  FixedThemeWrapper,
  LayoutBottom,
  LayoutHeader,
  LayoutScreen,
  LayoutScroll,
  Stack,
} from '../../components';
import {DarkTheme, ROUTES} from '../../constants';
import {neutral100, neutral300} from '../../constants/colors';

const NftScreen = ({route, navigation}) => {
  const {statusBarStyle, fontColor} = DarkTheme;
  const item = route.params.item;
  return (
    <LayoutScreen statusBar={{backgroundColor: neutral300, colorStyle: statusBarStyle}}>
      <LayoutScroll>
        <FixedThemeWrapper dark style={{backgroundColor: neutral300}}>
          <LayoutHeader
            title={item.name}
            headerStyle={{backgroundColor: neutral300}}
            headerTitleStyle={{color: fontColor}}
          />
          <Stack
            alignItems="center"
            marginTop={14}
            marginBottom={33}
            style={{backgroundColor: neutral300}}>
            <Image style={{width: 160, height: 160}} source={item.image} />
            <BodyHeading
              type={5}
              style={{
                textTransform: 'capitalize',
                marginTop: 25,
                color: fontColor,
              }}>
              {item.type}
            </BodyHeading>
            <BodyText type={3} style={{marginTop: 10, color: item.typeColor}}>
              #{item.code}
            </BodyText>
          </Stack>
        </FixedThemeWrapper>
        <View gap={20} marginTop={30} marginBottom={30} marginHorizontal={27}>
          {[
            {label: 'description', value: item.name},
            {label: 'standard', value: 'ERC7021'},
            {label: 'contract', value: '0xdcdcd...sdsdsdsd'},
          ].map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </View>
        <LayoutBottom type={2}>
          <ButtonPrimary
            title="Send"
            onPress={() =>
              navigation.navigate(ROUTES.WALLET.NFT_SEND, {
                Nftdata: item,
              })
            }
          />
        </LayoutBottom>
      </LayoutScroll>
    </LayoutScreen>
  );
};

const ListItem = ({label, value}) => {
  return (
    <Stack direction="row">
      <Stack>
        <BodyText style={{textTransform: 'capitalize'}}>{label}</BodyText>
      </Stack>
      <Stack style={{flex: 1, alignItems: 'flex-end'}}>
        <BodyText>{value}</BodyText>
      </Stack>
    </Stack>
  );
};

export default NftScreen;

const styles = StyleSheet.create({});
