import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BodyText, Precautions, ButtonText, CardBox, FixedThemeWrapper, LayoutScreen, LayoutScroll, Stack, LayoutBottom } from '../../components'
import DemoQR from '../../assets/DemoQR'
import { neutral300, white } from '../../constants/colors'
import { IconCopy2 } from '../../assets/icons'
import { useTheme } from 'styled-components'
import { useAuth } from '../../context/AuthContext'
import { fontButton } from '../../constants/fonts'
import { textToSentences } from '../../utils/formats'
import Clipboard from '@react-native-clipboard/clipboard'

const ReceiveBTCScreen = () => {
  const { i18n } = useAuth()

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack alignItems="center" marginTop={48}>
          <DemoQR />
          <FixedThemeWrapper dark style={{ marginTop: 50 }} noBG>
              <DarkCard />
          </FixedThemeWrapper>
          <Stack alignItems="center" marginTop={20}>
            {textToSentences(i18n.sendOnlyBtcWarning).map((text) => <BodyText type={5}>{text}</BodyText>)}
          </Stack>
        </Stack>

        <LayoutBottom paddingBottom={50}>
          <Stack paddingHorizontal={27}>
            <Precautions />
          </Stack>
        </LayoutBottom>
      </LayoutScroll>
    </LayoutScreen>
  )
}

const DarkCard = ({ }) => {
  const { i18n } = useAuth()
  const { input: { btnColor } } = useTheme()
  const [address] = useState('0xe34lkjd7BEsdlkfjlsasdfsdfkjsdlkf')

  const handleCopy = () => {
    Clipboard.setString(address)
  }

  return (
    <View style={styles.cardContainer}>
      <BodyText type={5} style={styles.card}>
        {address}
      </BodyText>
      <TouchableOpacity onPress={handleCopy} style={{ flexDirection: 'row' }}>
        <View style={[styles.btn, { color: btnColor, backgroundColor: btnColor }]}>
          <IconCopy2 />
          <BodyText style={styles.btnText}>
            {i18n.copyToClipBoard}
          </BodyText>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ReceiveBTCScreen

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 35,
    paddingBottom: 10,
    paddingTop: 20,
    borderRadius: 4,
    backgroundColor: neutral300,
    alignItems: 'center',
    gap: 14,
  },
  card: {
    color: white,
    width: 150,
    centerItems: 'center',
  },
  btn: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: 'center',
    gap: 6,
  },
  btnText: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 15,
    color: white,
    fontFamily: fontButton,
  },
})