import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { KeyBoardPasscode, LayoutScreen, Paragraph, Stack } from '../../components'
import { ROUTES } from '../../constants'
import { useAuth } from '../../context/AuthContext'

const ConfirmResetPasscode = ({ navigation, route }) => {
  const {i18n} = useAuth()
  const [pass, setPass] = useState('')
  const { login } = useAuth()
  const passcode = route.params.passcode

  useEffect(() => {
    if (pass.length === 6) {
      if (pass === passcode) {
        login(passcode);

        navigation.navigate('ROUTES.SETTING.RESET_PASSCODE');
      }
      else {
        Alert.alert('Passcode does not match')
      }
    }
  }, [pass])

  return (
    <LayoutScreen>
      <Stack marginTop={80} marginHorizontal={28} spacing={62}>
        <Paragraph
          title={i18n.reEnterPassCode}
          body={i18n.unlockInfo}
        />

        <Stack alignItems="center">
          <KeyBoardPasscode value={pass} onChange={(v) => setPass(v)} />
        </Stack>
      </Stack>
    </LayoutScreen>
  )
}

export default ConfirmResetPasscode
