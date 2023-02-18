import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BodyHeading, BodyText, ButtonPrimary, CustomInput, CustomSelect, ErrorText, LayoutBottom, LayoutScreen, LayoutScroll, Paragraph, Stack } from '../../components'
import { REGEX_EMAIL, ROUTES } from '../../constants'
import { useAuth } from '../../context/AuthContext'
import { fontBody } from '../../constants/fonts'
import { IconCheckCircle } from '../../assets/icons'
import { MoreData } from '../../constants/ListData'

const TIMER_SEC = 10


const EmailVerification = ({ navigation }) => {
  const { i18n } = useAuth()
  const [form, setForm] = useState({
    name: '',
    country: '',
    phoneNumber: '',
  })
  const [isSent, setSent] = useState(false)
  const [isVerified, setVerified] = useState(false)
  const [error, setError] = useState({
    name: false,
    country: false,
    phoneNumber: false,
  })
  const [code, setCode] = useState('')
  const [timer, setTimer] = useState(TIMER_SEC)
  const [intervalID, setIntervalID] = useState()

  const handleChange = (key = '', v) => {
    setForm(o => ({ ...o, [key]: v }))
    if (!form.name || !form.country || !form.phoneNumber) {
      setError(o => ({ ...o, [key]: !v }))
      return
    }
  }

  const handleSend = () => {
    if (!form.name || !form.country || !form.phoneNumber) {
      setError({
        name: !form.name,
        country: !form.country,
        phoneNumber: !form.phoneNumber,
      })
      return
    }
    setSent(true)
    const timer = setInterval(() => {
      setTimer(v => v - 1)
    }, 1000);
    setIntervalID(timer)
  }

  const handleVerify = () => {
    setVerified(true)
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

  const hasError = error.name || error.country || error.phoneNumber
  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack marginTop={80} marginHorizontal={28} marginBottom={30} spacing={72}>
          <Stack>
            <Stack marginBottom={20}>
              <BodyHeading>{i18n.smsVerification}</BodyHeading>
            </Stack>
            <BodyText>{i18n.kycNotVerifiedMsg}</BodyText>
            <BodyText>{i18n.kycPleaseVerify}</BodyText>
          </Stack>
          <Stack spacing={16}>
            <CustomInput
              value={form.name}
              onChange={(v) => handleChange('name', v)}
              placeholder={i18n.inputYourName}
              error={error.name}
            />
            {error.name && <ErrorText>{i18n.inputYourName}</ErrorText>}
            <View style={{ zIndex: 2 }}>
              <CustomSelect
                value={form.country}
                data={MoreData.countries}
                onChange={item => handleChange('country', item.value)}
                bordered
                dropDownStyle={{ width: '100%' }}
                wrapperStyle={{ height: 46 }}
              />
            </View>
            <CustomInput
              value={form.country}
              onChange={(v) => handleChange('country', v)}
              placeholder={i18n.selectYouCountry}
              error={error.country}
            />
            {error.country && <ErrorText>{i18n.selectYouCountry}</ErrorText>}
            <CustomInput
              value={form.phoneNumber}
              onChange={(v) => handleChange('phoneNumber', v)}
              placeholder={i18n.inputYourPhoneNumber}
              btnText={i18n.send}
              onPress={!isSent && handleSend}
              error={error.phoneNumber}
              keyboardType="numeric"
              action={isSent && (
                <Text style={styles.timer}>00:{timer < 10 ? `0${timer}` : timer}</Text>
              )}
            />
            {error.phoneNumber && <ErrorText>{i18n.inputYourPhoneNumber}</ErrorText>}
            {isSent && (
              <CustomInput
                value={code}
                onChange={(v) => setCode(v)}
                placeholder={i18n.enterVerificationCode}
                btnText={i18n.verify}
                onPress={!isVerified && handleVerify}
                action={isVerified && (
                  <IconCheckCircle />
                )}
              />
            )}
          </Stack>
        </Stack>

        <LayoutBottom paddingBottom={47} height={null}>
          <ButtonPrimary
            title={i18n.register}
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