import React, { useState, useEffect } from 'react'
import { LayoutScreen, KeyBoardPasscode, Stack, StepsAuth, Paragraph } from '../../components';
import { ROUTES } from '../../constants';

const CreatePasscode = ({ navigation }) => {
  const [passcode, setPasscode] = useState('');

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
      <Stack marginTop={80} marginHorizontal={28} spacing={62}>
        <Paragraph
          title="Create Passcode"
          body="Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet."
        />
        <Stack alignItems="center">
          <KeyBoardPasscode value={passcode} onChange={(v) => setPasscode(v)} />
        </Stack>
      </Stack>
    </LayoutScreen>
  )
}

export default CreatePasscode
