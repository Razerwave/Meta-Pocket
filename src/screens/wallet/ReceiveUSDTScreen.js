import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BodyText, LayoutScreen, LayoutScroll } from '../../components'
import { textToSentences } from '../../utils/formats'

const ReceiveUSDTScreen = () => {
  const {i18n} = useAuth()

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack>
          {textToSentences(i18n.chooseOnlyUsdtWarning).map((text) => <BodyText type={5}>{text}</BodyText>)}
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  )
}

export default ReceiveUSDTScreen

const styles = StyleSheet.create({})