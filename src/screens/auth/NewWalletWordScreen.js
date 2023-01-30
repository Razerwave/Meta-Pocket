import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { ButtonPrimary, CardBox, Screen, Stack, StyledText } from '../../components'
import { ROUTES } from '../../constants'

const NewWalletWordScreen = ({ route, navigation }) => {
  const { words } = route.params
  const { fontColor, backgroundColor } = useTheme()
  const wordsArray = words.split(' ')
  const [chosenWords, setChosenWords] = useState([])

  const handleClick = (word) => {
    setChosenWords(arr => arr.includes(word) ? arr.filter(v => v !== word) : [...arr, word])
  }

  const passed = chosenWords.join(' ') === words
  return (
    <Screen bottom={
      <Stack padding={16} spacing={16}>
        <ButtonPrimary title='Continue' disabled={!passed} onPress={() => navigation.navigate(ROUTES.LOGIN_SCREEN)} />
      </Stack>
    }>
      <Stack padding={16} spacing={16}>
        <CardBox>
          <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
            Have you backed up?
          </StyledText>
        </CardBox>
        <CardBox>
          <StyledText>
            Please click the first(1st) word first, then the last word(12th)
          </StyledText>
        </CardBox>
        <CardBox style={{ borderRadius: 16 }}>
          <View style={{ paddingVertical: 24 }}>
            <StyledText>{chosenWords.join(' ')}</StyledText>
          </View>
        </CardBox>
        <View style={styles.containerWords}>
          {wordsArray.map((word, index) => {
            const position = chosenWords.indexOf(word) + 1
            const bgColor = position === 0 ? backgroundColor : fontColor
            const fColor = position === 0 ? fontColor : backgroundColor
            return (
              <TouchableOpacity
                key={index}
                style={[styles.wordBox, { backgroundColor: bgColor, borderColor: fColor, borderWidth: 1 }]}
                onPress={() => handleClick(word)}
              >
                <StyledText style={{ color: fColor }}>{word} : {position}</StyledText>
              </TouchableOpacity>
            )
          })}
        </View>
      </Stack>
    </Screen>
  )
}

const styles = StyleSheet.create({
  containerWords: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  wordBox: {
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '21%',
    textAlign: 'center',
  }
})

export default NewWalletWordScreen
