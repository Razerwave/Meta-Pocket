import {
  black,
  gray100,
  gray200,
  neutral300,
  primary,
  white,
  neutral200,
  backgroundColorDark,
  backgroundColorLight,
  LogoColorLight,
} from './colors';

const DefaultTheme = {
  // Sure
  tabIndicatorColor: gray100,
  fontColor: black,
  backgroundColor: backgroundColorLight,
  bottomTab: {
    bgColor: white,
    inactiveColor: gray200,
    activeColor: primary,
    activeIconColor: white,
    activeTextColor: primary,
  },
  card: {
    bgColor: white,
    border: primary,
  },
  logoColor: LogoColorLight,
  dividerColor: gray100,

  // not sure
  backgroundCardColor: white,

  // not done
  activeTintColor: primary,
  fonts: {
    subTitleColor: white,
  },
  steps: {
    activeColor: white,
    inactiveColor: white,
  },
  keyboardDeleteKey: {
    bgColor: gray100,
    opacity: '1',
    stroke: black,
  },
  input: {
    backgroundColor: white,
    borderColor: white,
    borderColorFocus: white,
    borderColorError: white,
    placeholerColor: white,
    inputColor: white,
    btnColor: white,
  },
};

const DarkTheme = {
  // Sure
  tabIndicatorColor: neutral200,
  fontColor: white,
  backgroundColor: backgroundColorDark,
  bottomTab: {
    bgColor: neutral300,
    inactiveColor: gray200,
    activeColor: primary,
    activeIconColor: white,
    activeTextColor: white,
  },
  card: {
    bgColor: neutral300,
    border: neutral300,
  },
  logoColor: white,
  dividerColor: neutral200,

  // not sure
  backgroundCardColor: black,

  // not done
  activeTintColor: primary,
  fonts: {
    subTitleColor: black,
  },
  steps: {
    activeColor: white,
    inactiveColor: black,
  },
  keyboardDeleteKey: {
    bgColor: gray200,
    opacity: '0.3',
    stroke: white,
  },
  input: {
    backgroundColor: black,
    borderColor: black,
    borderColorFocus: black,
    borderColorError: black,
    placeholerColor: black,
    inputColor: white,
    btnColor: black,
  },
};

export {DarkTheme, DefaultTheme};
