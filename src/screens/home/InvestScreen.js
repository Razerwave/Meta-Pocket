import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ButtonPrimary, CardBox, Screen, Stack, StyledText } from '../../components'
import { ROUTES } from '../../constants'
import { useTheme } from 'styled-components'

const InvestScreen = ({ navigation }) => {
  const { fontColor } = useTheme()
  return (
    <Screen>
      <Stack spacing={16} style={{ marginTop: 24 }}>
        <Stack padding={16} direction='row'>
          <CardBox style={{ width: 100, height: 100, borderRadius: 50 }}>

          </CardBox>
          <Stack style={{ flex: 1, marginLeft: 6 }} spacing={6}>
            <ListItem1 />
            <ListItem1 />
            <ListItem1 />
            <ListItem1 />
          </Stack>
        </Stack>
        <Stack padding={16}>
          <ButtonPrimary title='Minning Swap' onPress={() => navigation.navigate(ROUTES.INVEST.MINNING_SWAP)} />
        </Stack>
        <View style={{ borderColor: fontColor, borderTopWidth: 1 }} />
        <Stack padding={16} spacing={24}>
          <Stack spacing={8}>
            <CardBox style={{ width: 120 }}>
              <StyledText>JAN 12, 2022</StyledText>
            </CardBox>
            <ListItem2 />
          </Stack>
          <Stack spacing={8}>
            <CardBox style={{ width: 120 }}>
              <StyledText>JAN 12, 2022</StyledText>
            </CardBox>
            <ListItem2 />
            <ListItem2 />
          </Stack>
        </Stack>
      </Stack>
    </Screen>
  )
}

const ListItem1 = () => {
  const { fontColor } = useTheme()
  return (
    <Stack direction='row' spacing={8}>
      <View style={{ width: 18, height: 18, borderWidth: 1, borderColor: fontColor }}></View>
      <StyledText style={{ fontWeight: 'bold' }}>Staking</StyledText>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <StyledText>0.01 BTC (10%)​</StyledText>
      </View>
    </Stack>
  )
}

const ListItem2 = () => {
  const { fontColor } = useTheme()
  return (
    <Stack direction='row' spacing={16}>
      <View style={{ width: 30, height: 30, borderWidth: 1, borderRadius: 8, borderColor: fontColor }}></View>
      <StyledText style={{ fontWeight: 'bold', borderWidth: 1, borderColor: fontColor, padding: 4 }}>Staking</StyledText>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <StyledText style={{ fontWeight: 'bold', borderWidth: 1, borderColor: fontColor, padding: 4 }}>-0.01 BTC</StyledText>
      </View>
    </Stack>
  )
}

export default InvestScreen
