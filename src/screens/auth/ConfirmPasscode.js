import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { ROUTES } from '../../constants';
import { LayoutScreen, Stack, StepsAuth, KeyBoardPasscode, Paragraph } from '../../components';

const ConfirmPasscode = ({ route, navigation }) => {
  const [passcode, setPasscode] = useState('');

  handleChange = (num) => {
    setPasscode(s => s.length < 6 ? s + num : s)
  }
  const paramPasscode = route.params.passcode

  useEffect(() => {
    if (passcode.length === 6) {
      if (passcode === paramPasscode) {
        navigation.navigate(ROUTES.AUTH.RESULT, { 'passcode': passcode });
      }
      else {
        Alert.alert('Passcode does not match')
      }
    }
  }, [passcode]);

  return (
    <LayoutScreen>
      <StepsAuth current={5} />
      <Stack marginTop={80} marginHorizontal={28} spacing={62}>
        <Paragraph
          title="Confirm Passcode"
          body="Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet."
        />
        <Stack alignItems="center">
          <KeyBoardPasscode value={passcode} onChange={(v) => setPasscode(v)} />
        </Stack>
      </Stack>

    </LayoutScreen>
  )
}

export default ConfirmPasscode
