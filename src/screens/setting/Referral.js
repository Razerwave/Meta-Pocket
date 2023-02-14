import React, { useState } from 'react'
import { ButtonPrimary, CustomInput, LayoutBottom, LayoutScreen, Paragraph, Stack } from '../../components'
import { ROUTES } from '../../constants'

const Referral = ({ navigation }) => {
  const [uid, setUID] = useState('')

  const handleOK = () => {
    navigation.navigate(ROUTES.HOME.SETTING);
  }

  return (
    <LayoutScreen>
      <Stack marginTop={80} marginHorizontal={28} spacing={72}>
        <Paragraph
          title={'Referral UID'}
          body={`Enter the referrer's UID (M000000). The referral code cannot be changed once you have completed the process.`}
        />
        <Stack spacing={16}>
          <CustomInput
            value={uid}
            onChange={(v) => setUID(v)}
            placeholder="Enter referral UID"
          />
        </Stack>
      </Stack>
      <LayoutBottom>
        <ButtonPrimary
          title="OK"
          onPress={() => handleOK()}
        />
      </LayoutBottom>
    </LayoutScreen>
  )
}

export default Referral
