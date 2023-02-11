import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, Switch, TextInput } from 'react-native'
import { ButtonPrimary, CardBox, KeyBoardPasscode, LayoutScreen, Screen, Stack, StyledText, Title } from '../../components'
import { useTheme } from 'styled-components'
import { ROUTES } from '../../constants'

const ResetPasscode = ({ navigation }) => {
  const { fontColor } = useTheme()
  const [passcode, setPasscode] = useState('')

  useEffect(() => {
    if (passcode.length === 6) {
      navigation.navigate(ROUTES.SETTING.CONFIRM_RESET_PASSCODE, { 'passcode': passcode });
    }
  }, [passcode])

  return (
    <LayoutScreen>
      <Stack marginTop={80} marginHorizontal={28} marginBottom={62} spacing={29}>
        <Title>
          Reset Passcode
        </Title>
        <StyledText>
          Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.
        </StyledText>
      </Stack>

      <Stack alignItems="center">
        <KeyBoardPasscode value={passcode} onChange={(v) => setPasscode(v)} />
      </Stack>
    </LayoutScreen>
  )
}

export default ResetPasscode
