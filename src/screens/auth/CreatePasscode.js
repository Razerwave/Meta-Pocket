import React, { useState, useEffect } from 'react'
import { LayoutScreen, KeyBoardPasscode, Stack, StepsAuth, Paragraph } from '../../components';
import { ROUTES } from '../../constants';
import { useAuth } from '../../context/AuthContext';

const CreatePasscode = ({ navigation }) => {
  const {i18n} = useAuth()
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
          title={i18n.createPassCode}
          body={i18n.unlockInfo}
        />
        <Stack alignItems="center">
          <KeyBoardPasscode value={passcode} onChange={(v) => setPasscode(v)} />
        </Stack>
      </Stack>
    </LayoutScreen>
  )
}

export default CreatePasscode
