import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonPrimary, CustomInput, LayoutBottom, LayoutScreen, Stack, StyledText, Title } from '../../components'
import { ROUTES } from '../../constants'

const EmailVerification = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [isSent, setSent] = useState(false)
  const [code, setCode] = useState('')
  const [timer, setTimer] = useState(3)
  const [intervalID, setIntervalID] = useState()

  const handleChangeEmail = v => {
    setEmail(v)
  }

  const handleSend = () => {
    setSent(true)
    const timer = setInterval(() => {
      setTimer(v => v-1)
    }, 1000);
    setIntervalID(timer)
  }

  useEffect(() => {
    if (timer == 0) {
      clearInterval(intervalID)
      setSent(false)
      setTimer(3)
    }
  },[timer])

  const handleOK = () => {
    navigation.navigate(ROUTES.HOME.SETTING)
  }

  return (
    <LayoutScreen>
      <Stack marginTop={80} marginHorizontal={28} marginBottom={72} spacing={29}>
        <Title>
          Email Verification
        </Title>
        <StyledText>
          Your wallet has not yet been verified. Please complete KYC verification.
        </StyledText>
      </Stack>
      <Stack marginHorizontal={28} spacing={16}>
        <CustomInput
          value={email}
          onChange={(v) => handleChangeEmail(v)}
          placeholder="Enter your Email Address"
          btnText='Send'
          onPress={!isSent && handleSend}
          action={isSent && (
            <Text style={styles.timer}>00:{timer < 10 ? `0${timer}` :timer}</Text>
          )}
        />
        {isSent && (
          <CustomInput
            value={code}
            onChange={(v) => setCode(v)}
            placeholder="Verification Code"
          />
        )}
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

export default EmailVerification

const styles = StyleSheet.create({
  timer: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    fontFamily: 'Lato',
    fontSize: 10,
    fontWeight: '600',
    color: '#04CB8D',
  }
})