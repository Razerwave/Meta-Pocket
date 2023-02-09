import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Stack from './Stack'
import StyledText from './texts/StyledText'

const DEFAULT_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const KeyBoardNumeric = ({ onNumber = () => { }, onReset = () => { }, onDelete = () => { } }) => {
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    setNumbers([...DEFAULT_NUMBERS].sort((a, b) => 0.5 - Math.random()))
  }, [])

  return (
    <View>
      <View style={styles.container}>
        {numbers.slice(0, 3).map((number) => (
        <TouchableOpacity key={number} style={styles.key} onPress={() => onNumber(number)}>
            <StyledText>{number}</StyledText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        {numbers.slice(3, 6).map((number) => (
        <TouchableOpacity key={number} style={styles.key} onPress={() => onNumber(number)}>
            <StyledText>{number}</StyledText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        {numbers.slice(6, 9).map((number) => (
        <TouchableOpacity key={number} style={styles.key} onPress={() => onNumber(number)}>
            <StyledText>{number}</StyledText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.key} onPress={() => onReset()}>
          <StyledText>RESET</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => onNumber(numbers[9])}>
          <StyledText>{numbers[9]}</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => onDelete()}>
          <StyledText>DELETE</StyledText>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default KeyBoardNumeric

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 4,
  },
  key: {
    flex: 1,
    paddingVertical: 18,
    marginBottom: 4,
    alignItems: 'center',
  }
})