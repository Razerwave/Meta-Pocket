import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { CardBox, Screen } from '../../components'
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
      <Button title='Continue' disabled={!passed} onPress={() => navigation.navigate(ROUTES.LOGIN_SCREEN)} />
    }>
      <Text>Have you backed up?</Text>
      <Text>Please click the first(1st) word first, then the last word(12th)</Text>
      <CardBox>
        <Text>{chosenWords.join(' ')}</Text>
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
              <Text>{word} : {position}</Text>
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
