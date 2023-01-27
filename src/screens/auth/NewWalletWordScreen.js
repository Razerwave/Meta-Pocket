import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { ButtonPrimary, CardBox, Screen, StyledText } from '../../components'
import { ROUTES } from '../../constants'

const NewWalletWordScreen = ({ route, navigation }) => {
  const { words } = route.params
  const wordsArray = words.split(' ')
  const [chosenWords, setChosenWords] = useState([])

  const handleClick = (word) => {
    setChosenWords(arr => arr.includes(word) ? arr.filter(v => v !== word) : [...arr, word])
  }

  const passed = chosenWords.join(' ') === words
  return (
    <Screen bottom={
      <ButtonPrimary title='Continue' disabled={!passed} onPress={() => navigation.navigate(ROUTES.LOGIN_SCREEN)} />
    }>
      <StyledText>Have you backed up?</StyledText>
      <StyledText>Please click the first(1st) word first, then the last word(12th)</StyledText>
      <CardBox>
        <StyledText>{chosenWords.join(' ')}</StyledText>
      </CardBox>
      <View style={styles.containerWords}>
        {wordsArray.map((word, index) => {
          const position = chosenWords.indexOf(word) + 1
          const bgColor = position === 0 ? 'lightgray' : 'gray'
          return (
            <TouchableOpacity
              key={index}
              style={[styles.wordBox, { backgroundColor: bgColor }]}
              onPress={() => handleClick(word)}
            >
              <StyledText>{word} : {position}</StyledText>
            </TouchableOpacity>
          )
        })}
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  containerWords: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'aliceblue',
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
