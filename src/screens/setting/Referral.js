import React, { useState } from 'react'
import { ButtonPrimary, CustomInput, LayoutBottom, LayoutScreen, Paragraph, Stack } from '../../components'
import { ROUTES } from '../../constants'
import { useAuth } from '../../context/AuthContext'

const Referral = ({ navigation }) => {
  const {i18n} = useAuth()
  const [uid, setUID] = useState('')

  const handleOK = () => {
    navigation.navigate(ROUTES.HOME.SETTING);
  }

  return (
    <LayoutScreen>
      <Stack marginTop={80} marginHorizontal={28} spacing={72}>
        <Paragraph
          title={i18n.referralUID}
          body={i18n.enterReferrerUIDMsg}
        />
        <Stack spacing={16}>
          <CustomInput
            value={uid}
            onChange={(v) => setUID(v)}
            placeholder={i18n.enterReferralUID}
          />
        </Stack>
      </Stack>
      <LayoutBottom paddingBottom={47} height={null}>
        <ButtonPrimary title={i18n.ok} onPress={() => handleOK()} />
      </LayoutBottom>
    </LayoutScreen>
  )
}

export default Referral
