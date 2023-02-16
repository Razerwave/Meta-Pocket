import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BodyText, ButtonGray, ButtonText, CardBox, LayoutScreen, LayoutScroll, Stack } from '../../components'
import DemoQR from '../../assets/DemoQR'
import { neutral300, white } from '../../constants/colors'
import { IconCopy } from '../../assets/icons'

const ReceiveBTCScreen = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    Clipboard.setString(words.join(' '))
    setCopied(true)
  }
  
  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack alignItems="center" marginTop={48} spacing={50}>
          <DemoQR />
          <Stack>
            <View style={{
              width: 220,
              paddingHorizontal: 35,
              paddingVertical: 10,
              backgroundColor: neutral300,
              alignItems: 'center',
            }}>
              <BodyText style={{ color: white }}>
                0xe34lkjd7BEsdlkfjlsasdfsdfkjsdlkf
              </BodyText>
              <ButtonText style={{ fontSize: 12, lineHeight: 16, color: white }}>
                {copied ? 'Copied' : 'Copy'} to clipboard
              </ButtonText>
              <TouchableOpacity onPress={handleCopy}>
                <Stack direction='row' spacing={6}>
                  <IconCopy />
                  <ButtonText style={{ fontSize: 12, lineHeight: 16 }}>
                    {copied ? 'Copied' : 'Copy'} to clipboard
                  </ButtonText>
                </Stack>
              </TouchableOpacity>
            </View>
          </Stack>
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  )
}

export default ReceiveBTCScreen

const styles = StyleSheet.create({})