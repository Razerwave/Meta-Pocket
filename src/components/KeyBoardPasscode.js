import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Stack from './Stack'
import StyledText from './texts/StyledText'
import { white } from '../constants/colors'
import { SvgXml } from 'react-native-svg'

const DEFAULT_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const BACKKEY_XML = `<svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.86234 1.36339C8.62184 0.49689 9.71813 0 10.8704 0H36.5C38.7091 0 40.5 1.79086 40.5 4V10V16C40.5 18.2091 38.7091 20 36.5 20H10.791C9.68495 20 8.62829 19.542 7.87206 18.7349L2.47865 12.9787C1.07207 11.4775 1.03352 9.15421 2.38953 7.60718L7.86234 1.36339Z" fill="#F2F2F2" fill-opacity="0.1"/>
<rect x="19" y="13.2728" width="10.2852" height="1.02852" rx="0.514258" transform="rotate(-45 19 13.2728)" fill="#F2F2F2"/>
<rect x="26.2725" y="14" width="10.2852" height="1.02852" rx="0.514258" transform="rotate(-135 26.2725 14)" fill="#F2F2F2"/>
</svg>
`

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
          <StyledText>Reset</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleNumber(numbers[9])}>
          <StyledText>{numbers[9]}</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={() => handleDelete()}>
          <SvgXml xml={BACKKEY_XML}/>
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

    fontFamily: 'Lato',
    fontSize: 14,
    lineHeight: 17,
  }
})