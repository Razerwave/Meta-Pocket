import { blackBlue1, blackBlue2, gray2, white, white2, black2, blue, blue2, blue3, blue4, white3, grayLight } from "./colors"

const DefaultTheme = {
    backgroundColor: white2,
    backgroundCardColor: white,
    fontColor: black2,
    activeTintColor: blue,
    card: {
       border: blue4,
    },
    fonts: {
        logoColor: blue3,
    },
    steps: {
        activeColor: blue2,
        inactiveColor: gray2,
    },
    keyboardDeleteKey: {
        bgColor: grayLight,
        opacity: '1',
        stroke: black2,
    },
}

const DarkTheme = {
    backgroundColor: blackBlue1,
    backgroundCardColor: blackBlue2,
    fontColor: white,
    activeTintColor: blue,
    card: {
       border: blackBlue2,
    },
    fonts: {
        logoColor: white,
    },
    steps: {
        activeColor: white,
        inactiveColor: gray2,
    },
    keyboardDeleteKey: {
        bgColor: white3,
        opacity: '0.1',
        stroke: white3,
    },
}

export { DarkTheme, DefaultTheme }