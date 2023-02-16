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
  neutral100,
  red,
  gray300,
  blue300,
  purple200,
} from './colors';

const DefaultTheme = {
  // Sure
  statusBarStyle: 'dark-content',
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
  subTitleColor: gray300,
  input: {
    backgroundColor: white,
    borderColor: gray100,
    borderColorFocus: neutral200,
    borderColorError: red,
    placeholerColor: neutral100,
    inputColor: black,
    btnColor: neutral200,
  },
  search: {
    borderColor: neutral100,
    placeholerColor: neutral100,
    inputColor: white,
  },
  walletTab: {
    borderColor: gray100,
    activeColor: purple200,
    inactiveColor: gray300,
  },

  // not sure
  backgroundCardColor: white,

  // not done
  activeTintColor: primary,
  steps: {
    activeColor: white,
    inactiveColor: white,
  },
  keyboardDeleteKey: {
    bgColor: gray100,
    opacity: '1',
    stroke: black,
  },
  exploreTab: {
    tabInActiveColor: gray300,
    tabActiveColor: blue300,
  },
};

const DarkTheme = {
  // Sure
  statusBarStyle: 'light-content',
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
  subTitleColor: gray100,
  input: {
    backgroundColor: neutral300,
    borderColor: black,
    borderColorFocus: neutral100,
    borderColorError: red,
    placeholerColor: neutral100,
    inputColor: white,
    btnColor: neutral100,
  },
  search: {
    borderColor: neutral100,
    placeholerColor: neutral100,
    inputColor: white,
  },
  walletTab: {
    borderColor: neutral200,
    activeColor: white,
    inactiveColor: gray300,
  },

  // not sure
  backgroundCardColor: black,

  // not done
  activeTintColor: primary,
  steps: {
    activeColor: white,
    inactiveColor: gray200,
  },
  keyboardDeleteKey: {
    bgColor: gray200,
    opacity: '0.3',
    stroke: white,
  },
  exploreTab: {
    tabInActiveColor: gray300,
    tabActiveColor: white,
  },
};

export {DarkTheme, DefaultTheme};
