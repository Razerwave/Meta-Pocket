import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BodyText, ButtonPrimary, CustomInput, Divider, LayoutBottom, LayoutScreen, LayoutScroll, Stack } from '../../components'
import { useAuth } from '../../context/AuthContext';

const StakingBTCScreen = () => {
  const [balance, setBalance] = useState();
  const [amount, setAmount] = useState();
  const { i18n } = useAuth()

  const type = "BTC"

  const handleMax = () => {

  }

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack marginHorizontal={32}>
          <Divider />
          <Stack spacing={12} marginBottom={21} marginTop={21} paddingHorizontal={9}>
            <ListItem label={i18n.available} value={`0.1 ${type}`} />
            <ListItem label={i18n.myStacking} value={`0.1 ${type}`} />
            <ListItem label={i18n.minimum} value={`0.1 ${type}`} />
            <ListItem label={i18n.apr} value={`0.1 %`} />
            <ListItem label={i18n.period} value={`0.1 M`} />
          </Stack>
          <Divider />
        </Stack>
        <Stack marginTop={20} marginHorizontal={16} spacing={10}>
          <Stack style={{ alignItems: 'flex-end', marginRight: 6 }}>
            <BodyText>
              {i18n.balance} {balance}
            </BodyText>
          </Stack>
          <CustomInput
            value={amount}
            onChange={(v) => setAmount(v)}
            placeholder={i18n.quantity}
            btnText={i18n.max}
            onPress={handleMax}
          />
        </Stack>

        <LayoutBottom type={2}>
          <ButtonPrimary title={i18n.next} onPress={() => handleNext()} />
        </LayoutBottom>
      </LayoutScroll>
    </LayoutScreen>
  )
}

const ListItem = ({ label, value }) => {
  return (
    <Stack direction='row'>
      <BodyText>{label}</BodyText>
      <Stack style={{ flex: 1, alignItems: 'flex-end' }}>
        <BodyText>{value}</BodyText>
      </Stack>
    </Stack>
  )
}

export default StakingBTCScreen

const styles = StyleSheet.create({})