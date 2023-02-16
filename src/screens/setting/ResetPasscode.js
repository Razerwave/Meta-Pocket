import React, { useEffect, useState } from 'react'
import { KeyBoardPasscode, LayoutScreen, Paragraph, Stack } from '../../components'
import { ROUTES } from '../../constants'
import { useAuth } from '../../context/AuthContext'

const ResetPasscode = ({ navigation }) => {
  const {i18n } = useAuth();
  const [passcode, setPasscode] = useState('')

  useEffect(() => {
    if (passcode.length === 6) {
      navigation.navigate(ROUTES.SETTING.CONFIRM_RESET_PASSCODE, { 'passcode': passcode });
    }
  }, [passcode])

  return (
    <LayoutScreen>
      <Stack marginTop={80} marginHorizontal={28} spacing={62}>
        <Paragraph
          title={i18n.resetPassCode}
          body={i18n.unlockInfo}
        />

        <Stack alignItems="center">
          <KeyBoardPasscode value={passcode} onChange={(v) => setPasscode(v)} />
        </Stack>
      </Stack>
    </LayoutScreen>
  )
}

export default ResetPasscode
