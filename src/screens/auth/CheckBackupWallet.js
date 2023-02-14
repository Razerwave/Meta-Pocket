import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { LayoutScreen, ButtonPrimary, LayoutBottom, Stack, StyledText, Title, StepsAuth, LayoutCenter, Paragraph } from '../../components'
import { ROUTES } from '../../constants'
import { blue300, purple100, white } from '../../constants/colors'

const CheckBackupWallet = ({ route, navigation }) => {
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
    <LayoutScreen>
      <StepsAuth current={2} />
      <Stack marginTop={80} marginHorizontal={28} marginBottom={70} spacing={20}>
        <Paragraph
          title="Have you backed up?"
          body="Please click the first(1st) word first, then the last word(12th)"
        />
      </Stack>
      <Stack marginHorizontal={58}>
        <View style={styles.wordsContainerOuter}>
          <View style={styles.wordsContainerInner}>
            {words.map((word, index) => (
              <WordBox
                key={index}
                fontColor={fontColor}
                backgroundCardColor={backgroundCardColor}
                onPress={() => handleClick(word)}
              >
                {word === chosenWords[0] ? (
                  <>
                    <LayoutCenter overlayStlye={styles.activeBox1}>
                      <Stack direction='row'>
                        <Text style={[styles.activeText1]}>1</Text>
                        <Text style={[styles.activeText2]}>st</Text>
                      </Stack>
                    </LayoutCenter>
                    <StyledText style={[styles.boxText]}>{word}</StyledText>
                  </>
                ) : word === chosenWords[1] ? (
                  <>
                    <LayoutCenter overlayStlye={styles.activeBox2}>
                      <Stack direction='row'>
                        <Text style={[styles.activeText1]}>12</Text>
                        <Text style={[styles.activeText2]}>th</Text>
                      </Stack>
                    </LayoutCenter>
                    <StyledText style={[styles.boxText]}>{word}</StyledText>
                  </>
                ) : <StyledText style={[styles.boxText]}>{word}</StyledText>
                }
              </WordBox>
            ))}
          </View>
        </View>

      </Stack>
      <LayoutBottom>
        <ButtonPrimary title='Continue' disabled={!passed} onPress={() => navigation.navigate(ROUTES.AUTH.PROTECT_WALLET)} />
      </LayoutBottom>
    </LayoutScreen>
  )
}

const WordBox = ({ children, backgroundCardColor, fontColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.boxOuter, { backgroundColor: backgroundCardColor }]}
      onPress={onPress}
    >
      <View style={[styles.boxInside, { borderColor: fontColor }]}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
  activeBox1: {
    zIndex: 1,
    opacity: .85,
    borderRadius: 9999,
    backgroundColor: blue300,
  },
  activeBox2: {
    zIndex: 1,
    opacity: .85,
    borderRadius: 9999,
    backgroundColor: purple100,
  },
  activeText1: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    color: white,
  },
  activeText2: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 8,
    lineHeight: 12,
    verticalAlign: 'top',
    color: white,
  }
})

export default CheckBackupWallet
