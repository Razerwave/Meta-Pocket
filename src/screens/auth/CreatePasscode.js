import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { LayoutScreen, KeyBoardPasscode, Stack, StyledText, Title, StepsAuth } from '../../components';
import { ROUTES } from '../../constants';
import { useTheme } from 'styled-components'

const CreatePasscode = ({ navigation }) => {
  const [passcode, setPasscode] = useState('');
  const { fontColor } = useTheme()

  handleChange = (num) => {
    setPasscode(s => s.length < 6 ? s + num : s)
  }

  useEffect(() => {
    if (passcode.length === 6) {
      navigation.navigate(ROUTES.AUTH.CONFIRM_PASSCODE, { 'passcode': passcode });
    }
  }, [passcode]);

  return (
    <LayoutScreen>
      <StepsAuth current={4} />
      <Stack padding={28} spacing={29}>
        <Title>
          Create Passcode
        </Title>
        <StyledText>
          Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet.
        </StyledText>
      </Stack>

      <Stack padding={50}>
        <KeyBoardPasscode value={passcode} onChange={(v) => setPasscode(v)} />
      </Stack>
    </LayoutScreen>
  )
}

export default CreatePasscode
