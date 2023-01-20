import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TouchableHighlight } from 'react-native'
import { ROUTES } from '../../constants'

const NewWalletWordScreen = ({ route, navigation }) => {
  const { words } = route.params
  const wordsArray = words.split(' ')
  const [chosenWords, setChosenWords] = useState([])

  const handleClick = (word) => {
    chosenWords.includes(word) 
    ? setChosenWords(arr => arr.filter(v => v !== word))
    : setChosenWords(arr => ([...arr, word]))
  }
  
  const passed = chosenWords.join(' ') === words
  return (
    <View>
      <Text>Have you backed up?</Text>
      <Text>Please click the first(1st) word first, then the last word(12th)</Text>
      <Text>{words}</Text>
      <Text>{chosenWords.join(' ')}</Text>
      <View>
        {wordsArray.map((word, index) => (
          <TouchableHighlight key={index} onPress={() => handleClick(word)}>
            <View>
              <Text>{word} : {chosenWords.findIndex(v => v === word)+1}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
      <Button title='Continue' disabled={!passed} onPress={() => navigation.navigate(ROUTES.NEW_WALLET_WORDS)} />
    </View>
  )
}

export default NewWalletWordScreen
