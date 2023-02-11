import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonPrimary, CustomInput, LayoutBottom, LayoutScreen, Stack, StyledText, Title } from '../../components'
import { ROUTES } from '../../constants'

const Referral = ({ navigation }) => {
  const [uid, setUID] = useState('')

  const handleOK = () => {
    navigation.navigate(ROUTES.SETTING.REFERRAL);
  }

  return (
    <LayoutScreen>
      <Stack marginTop={80} marginHorizontal={28} marginBottom={72} spacing={29}>
        <Title>
          Referral UID
        </Title>
        <StyledText>
          Enter the referrer's UID (M000000). The referral code cannot be changed once you have completed the process.
        </StyledText>
      </Stack>
      <Stack marginHorizontal={28} spacing={16}>
        <CustomInput
          value={uid}
          onChange={(v) => setUID(v)}
          placeholder="Enter referral UID"
        />
      </Stack>
      <LayoutBottom>
        <ButtonPrimary
          title="OK"
          onPress={() => handleOK()}
        />
      </LayoutBottom>
    </LayoutScreen>
  )
}

export default Referral

const styles = StyleSheet.create({})