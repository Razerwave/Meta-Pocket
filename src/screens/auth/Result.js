import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ButtonPrimary, LayoutBottom, LayoutCenter, LayoutScreen, Stack } from '../../components'
import { useAuth } from '../../context/AuthContext'
import { AnimationCompleted } from '../../assets/animations'

const Result = ({ route }) => {
  const { i18n, login } = useAuth()

  return (
    <LayoutScreen>
      <View style={styles.upper}>
        <AnimationCompleted />
      </View>
      <View style={styles.bottom}>
        <ButtonPrimary
          title={i18n.getStarted}
          onPress={() => login(route.params.passcode)}
        />
      </View>
    </LayoutScreen>
  )
}

export default Result

const styles = StyleSheet.create({
  upper: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 40,
    paddingLeft: 45,
  },
  bottom: {
    height: 180,
    alignItems: 'center',
  }
})