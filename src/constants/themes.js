import {
  black,
  gray100,
  gray200,
  neutral300,
  primary,
  white,
  neutral200,
} from './colors';

const DefaultTheme = {
  // Sure
  tabIndicatorColor: gray100,
  fontColor: black,
  backgroundColor: gray100,
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

  // not sure
  backgroundCardColor: white,

  // not done
  activeTintColor: primary,
  dividerColor: white,
  fonts: {
    subTitleColor: white,
    logoColor: white,
  },
  steps: {
    activeColor: white,
    inactiveColor: white,
  },
  keyboardDeleteKey: {
    bgColor: white,
    opacity: '1',
    stroke: white,
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
  backgroundColor: black,
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

  // not sure
  backgroundCardColor: black,

  // not done
  activeTintColor: primary,
  dividerColor: black,
  fonts: {
    subTitleColor: black,
    logoColor: white,
  },
  steps: {
    activeColor: white,
    inactiveColor: black,
  },
  keyboardDeleteKey: {
    bgColor: black,
    opacity: '0.1',
    stroke: black,
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
