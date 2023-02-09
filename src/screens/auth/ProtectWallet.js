import React, { useState } from 'react'
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native'
import { Rect, Svg, SvgXml } from 'react-native-svg'
import { AuthLayout, BottomModal, ButtonPrimary, CardBox, Screen, Stack, StyledText, Title } from '../../components'
import { ROUTES } from '../../constants'
import { useTheme } from 'styled-components'
import IonIcon from 'react-native-vector-icons/Ionicons';

const ImageURI = require('../../assets/ProtectWallet.png')

const ProtectWallet = ({ navigation }) => {
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
    <AuthLayout>
      <Stack padding={28} spacing={29}>
        <Title>
          Protect your wallet.
        </Title>
        <StyledText>
          This extra layer of security prevents​ anyone with your phone from accessing​ your funds.
        </StyledText>
        <Stack alignItems="center">
          <Image source={ImageURI} />
        </Stack>
      </Stack>
      <Stack padding={16} spacing={16}>
        <Stack direction='row' spacing={9}>
          <TouchableOpacity onPress={() => handleToggle()}>
            <View style={[styles.checkBox, checkStyle]}>
              {agreed && (
                <SvgXml width="10" height="8" viewBox="0 0 10 8" fill={fontColor} xml={`
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.91185 7.27273L0 3.36088L1.15702 2.20386L3.91185 4.93113L8.84298 0L10 1.18457L3.91185 7.27273Z" fill="white"/>
                  </svg>              
                `}
                />
              )}
            </View>
          </TouchableOpacity>
          <Stack direction='row' spacing={4}>
            <StyledText style={{ fontSize: 12, lineHeight: 14 }}>
              I agree to the
            </StyledText>
            <TouchableOpacity onPress={() => setModalVisible('Terms')}>
              <StyledText style={{ fontSize: 12, lineHeight: 14, borderBottomWidth: 1, borderColor: fontColor }}>Terms</StyledText>
            </TouchableOpacity>
            <StyledText style={{ fontSize: 12, lineHeight: 14 }}>
              and
            </StyledText>
            <TouchableOpacity onPress={() => setModalVisible('Privacy Policy')}>
              <StyledText style={{ fontSize: 12, lineHeight: 14, borderBottomWidth: 1, borderColor: fontColor }}>Privacy Policy</StyledText>
            </TouchableOpacity>
          </Stack>
        </Stack>
        <ButtonPrimary title='Create Passcode' disabled={!agreed} onPress={() => navigation.navigate(ROUTES.AUTH.CREATE_PASSWORD)} />
      </Stack>

      <BottomModal
        visible={modalVisible === 'Terms'}
        onClose={() => {
          setModalVisible('');
        }}
      >
        <Stack spacing={20}>
          <Title>Terms</Title>
          <StyledText style={{ fontSize: 12, lineHeight: 18 }}>
            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet. Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.

            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.

            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.

            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.

            Set a 6-digit passcode to unlock your wallet. This
          </StyledText>
        </Stack>
      </BottomModal>

      <BottomModal
        visible={modalVisible === 'Privacy Policy'}
        onClose={() => {
          setModalVisible('');
        }}
      >
        <Stack spacing={20}>
          <Title>Privacy Police</Title>
          <StyledText style={{ fontSize: 12, lineHeight: 18 }}>
            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet. Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.

            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.

            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.

            Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.

            Set a 6-digit passcode to unlock your wallet. This
          </StyledText>
        </Stack>
      </BottomModal>
    </AuthLayout>
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
