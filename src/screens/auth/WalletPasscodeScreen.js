import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { AuthLayout, ButtonPrimary, CardBox, Screen, Stack, StyledText, Title } from '../../components'
import { ROUTES } from '../../constants'

const WalletPasscodeScreen = ({ route, navigation }) => {
  const { words = [], firstWord = '', lastWord = '' } = route?.params
  const { fontColor, backgroundColor, backgroundCardColor } = useTheme()
  const [chosenWords, setChosenWords] = useState(['', ''])

  const handleClick = (word) => {
    setChosenWords(arr => {
      const first = arr[0]
      const last = arr[1]
      if (first === word)
        return ['', last]
      if (last === word)
        return [first, '']
      if (first === '')
        return [word, last]
      if (last === '')
        return [first, word]
      return arr
    })
  }

  const passed = chosenWords[0] === firstWord && chosenWords[1] === lastWord
  return (
    <AuthLayout>
      <Stack padding={28} spacing={20}>
        <Title>
          Have you backed up?
        </Title>
        <StyledText>
          Please click the first(1st) word first, then the last word(12th)
        </StyledText>
        <View style={styles.wordsContainerOuter}>
          <View style={styles.wordsContainerInner}>
            {words.map((word, index) => {
              if (word === chosenWords[0])
                return (
                  <WordBox
                    key={index}
                    backgroundCardColor="#3769F1"
                    onPress={() => handleClick(word)}
                  >
                    <Stack direction="row" spacing={3} style={{ alignItems: 'center' }}>
                      <CircleBox text1="1" text2="st" />
                      <StyledText style={[styles.boxText, { fontWeight: '600' }]}>{word}</StyledText>
                    </Stack>
                  </WordBox>
                )

              if (word === chosenWords[1])
                return (
                  <WordBox
                    key={index}
                    backgroundCardColor="#A35AFF"
                    onPress={() => handleClick(word)}
                  >
                    <Stack direction="row" spacing={3} style={{ alignItems: 'center' }}>
                      <CircleBox text1="12" text2="th" />
                      <StyledText style={[styles.boxText, { fontWeight: '600' }]}>{word}</StyledText>
                    </Stack>
                  </WordBox>
                )

              return (
                <WordBox
                  key={index}
                  backgroundCardColor={backgroundCardColor}
                  onPress={() => handleClick(word)}
                >
                  <StyledText style={[styles.boxText]}>{word}</StyledText>
                </WordBox>
              )
            })}
          </View>
        </View>
        <Stack padding={16} spacing={16} style={{ alignItems: 'center' }}>
          <ButtonPrimary title='Continue' disabled={!passed} onPress={() => navigation.navigate(ROUTES.AUTH.TERMS_SCREEN)} />
        </Stack>
      </Stack>
    </AuthLayout>
  )
}

const WordBox = ({ children, backgroundCardColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.boxOuter, { backgroundColor: backgroundCardColor }]}
      onPress={onPress}
    >
      <View style={[styles.boxInside]}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

const CircleBox = ({ text1, text2 }) => {
  return (
    <View style={styles.circle}>
      <Stack direction='row'>
        <StyledText style={[styles.circleText1]}>{text1}</StyledText>
        <StyledText style={[styles.circleText2]}>{text2}</StyledText>
      </Stack>
    </View>
  )
}

const styles = StyleSheet.create({
  wordsContainerOuter: {
    marginHorizontal: 30,
  },
  wordsContainerInner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  boxOuter: {
    minWidth: '30%',
    marginBottom: 25,
    borderRadius: 9999,
  },
  boxInside: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 9999,
  },
  boxText: {
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
  },
  circle: {
    padding: 5,
    backgroundColor: '#1C1C28',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#000000',
    borderRadius: 9999,
  },
  circleText1: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
  },
  circleText2: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 6,
    lineHeight: 9,
    verticalAlign: 'top'
  }
})

export default WalletPasscodeScreen
