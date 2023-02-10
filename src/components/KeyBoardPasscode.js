import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Stack from './Stack'
import StyledText from './texts/StyledText'
import { white } from '../constants/colors'

const DEFAULT_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const KeyBoardPasscode = ({ value = '', onChange = () => { } }) => {
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    setNumbers([...DEFAULT_NUMBERS].sort((a, b) => 0.5 - Math.random()))
  }, [])

  const handleNumber = number => onChange(value + number)
  const handleReset = () => onChange('')
  const handleDelete = () => onChange(value.slice(0, -1))

  return (
    <View>
      <View style={styles.dotContainer}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <View key={index} style={[styles.dot, { backgroundColor: index < value.length ? white : 'transparent' }]} />
        ))}
      </View>
      <View style={styles.keyContainer}>
        {numbers.slice(0, 3).map((number) => (
          <TouchableOpacity key={number} style={styles.key} onPress={() => handleNumber(number)}>
            <StyledText>{number}</StyledText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.keyContainer}>
        {numbers.slice(3, 6).map((number) => (
          <TouchableOpacity key={number} style={styles.key} onPress={() => handleNumber(number)}>
            <StyledText>{number}</StyledText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.keyContainer}>
        {numbers.slice(6, 9).map((number) => (
          <TouchableOpacity key={number} style={styles.key} onPress={() => handleNumber(number)}>
            <StyledText>{number}</StyledText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.keyContainer}>
        <TouchableOpacity style={styles.key} onPress={() => handleReset()}>
          <StyledText>RESET</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleNumber(numbers[9])}>
          <StyledText>{numbers[9]}</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleDelete()}>
          <StyledText>DELETE</StyledText>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default KeyBoardPasscode

const styles = StyleSheet.create({
  dotContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    marginBottom: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: white,
    borderRadius: 9999,
  },
  keyContainer: {
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