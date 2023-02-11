import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconArrowBack } from '../../assets/icons'

const LayoutHeader = ({ title, headerStyle, headerTitleStyle, navigation }) => {
  return (
    <View style={[styles.container, headerStyle]}>
      <View style={styles.backArrow}>
        {navigation.canGoBack() &&
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconArrowBack />
          </TouchableOpacity>
        }
      </View>
      <Text style={[styles.title, headerTitleStyle]}>{title}</Text>
    </View>
  )
}

export default LayoutHeader

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    position: 'absolute',
    left: 20,
    top: 24,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
  },
})