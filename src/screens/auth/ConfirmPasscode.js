import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { ROUTES } from '../../constants';
import { LayoutScreen, Stack, StepsAuth, KeyBoardPasscode, Paragraph } from '../../components';
import { useAuth } from '../../context/AuthContext';

const ConfirmPasscode = ({ route, navigation }) => {
  const {i18n} = useAuth()
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
          title={i18n.confirmPassCode}
          body={i18n.unlockInfo}
        />
        <Stack alignItems="center">
          <KeyBoardPasscode value={passcode} onChange={(v) => setPasscode(v)} />
        </Stack>
      </Stack>

    </LayoutScreen>
  )
}

export default ConfirmPasscode
