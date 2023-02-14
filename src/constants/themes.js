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
  gray5,
  neutral100,
  red,
  gray300,
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
  subTitleColor: gray5,
  input: {
    backgroundColor: white,
    borderColor: gray100,
    borderColorFocus: neutral200,
    borderColorError: red,
    placeholerColor: neutral100,
    inputColor: black,
    btnColor: neutral100,
  },
  search: {
    borderColor: neutral100,
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
    tabActiveColor: black,
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
  subTitleColor: gray5,
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

  // not sure
  backgroundCardColor: black,

  // not done
  activeTintColor: primary,
  steps: {
    activeColor: white,
    inactiveColor: black,
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
