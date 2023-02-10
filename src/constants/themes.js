import { blackBlue1, blackBlue2, gray2, white, white2, black2, blue, blue2 } from "./colors"

const DefaultTheme = {
    backgroundColor: white2,
    backgroundCardColor: white,
    fontColor: black2,
    activeTintColor: blue,
    steps: {
        activeColor: blue2,
        inactiveColor: gray2,
    },
}

const DarkTheme = {
    backgroundColor: blackBlue1,
    backgroundCardColor: blackBlue2,
    fontColor: white,
    activeTintColor: blue,
    steps: {
        activeColor: white,
        inactiveColor: gray2,
    },
}

export { DarkTheme, DefaultTheme }