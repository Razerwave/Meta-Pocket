import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TouchableHighlight } from 'react-native'
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
    <View>
      <Text>Have you backed up?</Text>
      <Text>Please click the first(1st) word first, then the last word(12th)</Text>
      <Text>{words}</Text>
      <Text>{chosenWords.join(' ')}</Text>
      <View>
        {wordsArray.map((word, index) => (
          <TouchableHighlight key={index} onPress={() => handleClick(word)}>
            <View>
              <Text>{word} : {chosenWords.indexOf(word)+1}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
      <Button title='Continue' disabled={!passed} onPress={() => navigation.navigate(ROUTES.NEW_WALLET_WORDS)} />
    </View>
  )
}

export default NewWalletWordScreen
