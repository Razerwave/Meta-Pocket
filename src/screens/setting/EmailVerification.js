import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonPrimary, CustomInput, ErrorText, LayoutBottom, LayoutScreen, LayoutScroll, Paragraph, Stack } from '../../components'
import { REGEX_EMAIL, ROUTES } from '../../constants'
import { useAuth } from '../../context/AuthContext'
import { fontBody } from '../../constants/fonts'

const TIMER_SEC = 10


const EmailVerification = ({ navigation }) => {
  const { i18n } = useAuth()
  const [email, setEmail] = useState('')
  const [isSent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [code, setCode] = useState('')
  const [timer, setTimer] = useState(TIMER_SEC)
  const [intervalID, setIntervalID] = useState()

  const handleChangeEmail = v => {
    setEmail(v)
    if (REGEX_EMAIL.test(email)) {
      setError(false)
    }
  }

  const handleSend = () => {
    if (!REGEX_EMAIL.test(email)) {
      setError(true)
      return
    }
    setSent(true)
    const timer = setInterval(() => {
      setTimer(v => v - 1)
    }, 1000);
    setIntervalID(timer)
  }

  useEffect(() => {
    if (timer == 0) {
      clearInterval(intervalID)
      setSent(false)
      setTimer(TIMER_SEC)
    }
  }, [timer])

  const handleOK = () => {
    navigation.navigate(ROUTES.HOME.SETTING)
  }

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack marginTop={80} marginHorizontal={28} marginBottom={30} spacing={72}>
          <Paragraph
            title={i18n.emailVerification}
            body={i18n.kycNotVerifiedMsg}
          />
          <Stack spacing={16}>
            <CustomInput
              value={email}
              onChange={(v) => handleChangeEmail(v)}
              placeholder={i18n.enterYourEmailAddress}
              btnText='Send'
              onPress={!isSent && handleSend}
              error={error}
              action={isSent && (
                <Text style={styles.timer}>00:{timer < 10 ? `0${timer}` : timer}</Text>
              )}
            />
            {error && <ErrorText>
              Enter valid email
            </ErrorText>}
            {isSent && (
              <CustomInput
                value={code}
                onChange={(v) => setCode(v)}
                placeholder={i18n.enterVerificationCode}
              />
            )}
          </Stack>
        </Stack>

        <LayoutBottom paddingBottom={47} height={null}>
          <ButtonPrimary
            title="OK"
            onPress={() => handleOK()}
          />
        </LayoutBottom>
      </LayoutScroll>
    </LayoutScreen>
  )
}

export default EmailVerification

const styles = StyleSheet.create({
  timer: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    fontFamily: fontBody,
    fontSize: 10,
    fontWeight: '600',
    color: '#04CB8D',
  }
})