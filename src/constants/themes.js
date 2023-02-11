import { blackBlue1, blackBlue2, gray2, white, white2, black2, blue, blue2, blue3, blue4, white3, grayLight, gray4, blue5, gray3, gray5, grayLight2, blackBlue3, red, gray, black3, grayLight3, black4 } from "./colors"

const DefaultTheme = {
    backgroundColor: white2,
    backgroundCardColor: white,
    fontColor: black2,
    activeTintColor: blue,
    dividerColor: grayLight2,
    card: {
        border: blue4,
    },
    fonts: {
        subTitleColor: gray3,
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
    bottomTab: {
        bgColor: white,
        inactiveColor: gray4,
        activeColor: blue5,
        activeIconColor: white,
        activeTextColor: blue5,
    },
    input: {
        backgroundColor: white,
        borderColor: gray5,
        borderColorFocus: black3,
        borderColorError: red,
        placeholerColor: grayLight3,
        inputColor: black4,
        btnColor: black3,
    },
}

const DarkTheme = {
    backgroundColor: blackBlue1,
    backgroundCardColor: blackBlue2,
    fontColor: white,
    activeTintColor: blue,
    dividerColor: blackBlue3,
    card: {
        border: blackBlue2,
    },
    fonts: {
        subTitleColor: gray5,
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
    bottomTab: {
        bgColor: blackBlue2,
        inactiveColor: gray4,
        activeColor: blue5,
        activeIconColor: white,
        activeTextColor: white,
    },
    input: {
        backgroundColor: blackBlue2,
        borderColor: blackBlue2,
        borderColorFocus: gray5,
        borderColorError: red,
        placeholerColor: gray,
        inputColor: white,
        btnColor: gray,
    },
}

export { DarkTheme, DefaultTheme }