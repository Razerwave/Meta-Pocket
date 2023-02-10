import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonPrimary, LayoutBottom, LayoutScreen } from '../../components'
import { Layout } from 'react-native-reanimated'
import { useAuth } from '../../context/AuthContext'

const Result = ({ route }) => {
  const { login } = useAuth()

  return (
    <LayoutScreen>
      <LayoutBottom>
        <ButtonPrimary
          title="Get Started"
          onPress={() => login(route.params.passcode)}
        />
      </LayoutBottom>
    </LayoutScreen>
  )
}

export default Result

const styles = StyleSheet.create({})