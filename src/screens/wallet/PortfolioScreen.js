import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
  BodyHeading,
  BodyText,
  CircleAnimated,
  FixedThemeWrapper,
  LayoutHeader,
  LayoutScreen,
  LayoutScroll,
  ListItem,
  Stack,
  StyledText,
} from '../../components';
import { DarkTheme } from '../../constants';
import { IconDottRec } from '../../assets/icons';
import { gray100, gray200, gray300, magenta, neutral100, purple100 } from '../../constants/colors';

const PortfolioScreen = () => {
  const { backgroundColor, statusBarStyle, fontColor } = DarkTheme
  return (
    <LayoutScreen statusBar={{ backgroundColor: backgroundColor, colorStyle: statusBarStyle }}>
      <FixedThemeWrapper dark>
        <LayoutHeader
          title="Portfolio"
          headerStyle={{ backgroundColor: backgroundColor }}
          headerTitleStyle={{ color: fontColor }}
        />
        <TopSection />
      </FixedThemeWrapper>
      {/* <View style={styles.upperContainer}>
        <LayoutScroll>
          <Stack marginTop={30}>
            <ListItem>
              <StyledText>Total value</StyledText>
              <StyledText>$57.584</StyledText>
            </ListItem>
            <Stack direction="row" alignItems="center">
              <StyledText>Total value</StyledText>
              <StyledText>$57.584</StyledText>
            </Stack>
          </Stack>
        </LayoutScroll>
      </View> */}
    </LayoutScreen>
  );
};

const TopSection = () => {
  return (
    <Stack marginTop={30} marginBottom={20}>
      <Stack alignItems="center" marginBottom={25}>
        <CircleAnimated>
          <BodyText type={5}>Total value</BodyText>
          <BodyHeading type={4}>$57,784</BodyHeading>
        </CircleAnimated>
      </Stack>
      <Stack spacing={10}>
        <LisItem />
        <LisItem dotColor={magenta} />
        <LisItem dotColor={purple100} />
        <LisItem dotColor={neutral100} />
      </Stack>
    </Stack>
  );
};

const LisItem = ({ dotColor }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={10} marginHorizontal={33}>
      <IconDottRec color={dotColor} />
      <BodyText type={3}>BTC</BodyText>
      <Stack style={{ flex: 1, alignItems: 'flex-end' }}>
        <BodyText type={3} style={{ color: neutral100 }}>
          35
          <BodyText type={5} style={{ color: neutral100 }}> %</BodyText>
        </BodyText>
      </Stack>
      <BodyText type={3} style={{ marginLeft: 10 }}>$20,224</BodyText>
    </Stack>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: DarkTheme.backgroundColor,
  },
});
