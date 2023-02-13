import { StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import { AppStatusBar, CircleAnimated, LayoutScreen, LayoutScroll, ListItem, Stack, StyledText } from '../../components'
import { DarkTheme } from '../../constants'

const PortfolioScreen = () => {
  return (
    <LayoutScreen>
      <AppStatusBar barColor={DarkTheme.backgroundColor} barStyle="light-content" />
      <View style={styles.upperContainer}>
        <LayoutScroll>
          <Stack marginTop={30}>
            <Stack alignItems="center">
              <CircleAnimated>
                <StyledText>Total value</StyledText>
                <StyledText>$57.584</StyledText>
              </CircleAnimated>
            </Stack>
            <ListItem>
              <StyledText>Total value</StyledText>
              <StyledText>$57.584</StyledText>

            </ListItem>
            <Stack direction='row' alignItems="center">
              <StyledText>Total value</StyledText>
              <StyledText>$57.584</StyledText>
            </Stack>
          </Stack>
        </LayoutScroll>
      </View>
    </LayoutScreen>
  )
}

export default PortfolioScreen

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: DarkTheme.backgroundColor
  }
})