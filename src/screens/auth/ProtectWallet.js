import React, { useState } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { LayoutScreen, BottomModal, ButtonPrimary, LayoutBottom, Stack, StyledText, StepsAuth, Paragraph, LayoutScroll, BodyText } from '../../components'
import { ROUTES } from '../../constants'
import { useTheme } from 'styled-components'
import { IconCheck } from '../../assets/icons'
import { useAuth } from '../../context/AuthContext'
import { ScrollView } from 'react-native-gesture-handler'

const ImageURI = require('../../assets/ProtectWallet.png')

const ProtectWallet = ({ navigation }) => {
  const {i18n} = useAuth()
  const { fontColor, activeTintColor } = useTheme('')
  const [agreed, setAgreed] = useState(false);
  const [modalVisible, setModalVisible] = useState(null);

  const handleToggle = () => {
    setAgreed(v => !v)
  }

  const checkStyle = agreed ? {
    backgroundColor: activeTintColor,
  } : {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: fontColor,
  }

  return (
    <LayoutScreen>
      <StepsAuth current={3} />
      <Stack marginTop={80} marginHorizontal={28} spacing={76}>
        <Paragraph
          title={i18n.protectYourWallet}
          body={i18n.accessingWarning}
        />
        <Stack alignItems="center">
          <Image source={ImageURI} />
        </Stack>
      </Stack>
      <LayoutBottom height={224}>
        <View style={{ height: 44 }}>
          <Stack direction='row' spacing={9} alignItems="center">
            <TouchableOpacity onPress={() => handleToggle()}>
              <View style={[styles.checkBox, checkStyle]}>
                {agreed && <IconCheck />}
              </View>
            </TouchableOpacity>
            <Stack direction='row' spacing={4}>
              <BodyText type={5}>{i18n.iAgree}</BodyText>
              <TouchableOpacity onPress={() => setModalVisible('terms')} style={{ borderBottomWidth: 1, borderColor: fontColor }}>
                <BodyText type={5}>{i18n.terms}</BodyText>
              </TouchableOpacity>
              <BodyText type={5}>{i18n.and}</BodyText>
              <TouchableOpacity onPress={() => setModalVisible('privacyPolicy')} style={{ borderBottomWidth: 1, borderColor: fontColor }}>
                <BodyText type={5}>{i18n.privacyPolicy}</BodyText>
              </TouchableOpacity>
            </Stack>
          </Stack>
        </View>
        <ButtonPrimary title={i18n.createPassCode} disabled={!agreed} onPress={() => navigation.navigate(ROUTES.AUTH.CREATE_PASSCODE)} />
      </LayoutBottom>

      <BottomModal
        title={i18n.terms}
        visible={modalVisible === 'terms'}
        onClose={() => {
          setModalVisible('');
        }}
      >
        <LayoutScroll>
          <Paragraph
            bodyType={5}
            body={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(() => "Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet. Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.")}
          />
        </LayoutScroll>
      </BottomModal>

      <BottomModal
        title={i18n.privacyPolicy}
        visible={modalVisible === 'privacyPolicy'}
        onClose={() => {
          setModalVisible('');
        }}
      >
        <LayoutScroll>
          <Paragraph
            bodyType={5}
            body={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(() => "Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet. Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.")}
          />
        </LayoutScroll>
      </BottomModal>
    </LayoutScreen>
  )
}

const styles = StyleSheet.create({
  checkBox: {
    height: 14,
    width: 14,
    borderRadius: 2,
    paddingVertical: 3,
    paddingHorizontal: 2,
  },
})

export default ProtectWallet
