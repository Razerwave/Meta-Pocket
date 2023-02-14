import React, { useEffect, useState } from 'react'
import { KeyBoardPasscode, LayoutScreen, Paragraph, Stack } from '../../components'
import { ROUTES } from '../../constants'

const ResetPasscode = ({ navigation }) => {
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
          title="Reset Passcode"
          body="Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet."
        />

        <Stack alignItems="center">
          <KeyBoardPasscode value={passcode} onChange={(v) => setPasscode(v)} />
        </Stack>
      </Stack>
    </LayoutScreen>
  )
}

export default ResetPasscode
