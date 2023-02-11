import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconArrowBack } from '../../assets/icons'
import { useNavigation } from '@react-navigation/native';

const LayoutHeader = ({ title, headerStyle, headerTitleStyle }) => {
  const navigation = useNavigation()

  return (
    <View style={[styles.container, headerStyle]}>
      <View style={styles.backArrow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconArrowBack />
        </TouchableOpacity>
      </View>
      <Text style={[styles.title, headerTitleStyle]}>{title}</Text>
    </View>
  )
}

export default LayoutHeader

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    position: 'absolute',
    left: 21,
    top: 20,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
  },
})