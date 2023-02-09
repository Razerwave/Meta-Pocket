import React from 'react'
import { useTheme } from 'styled-components'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';

const BottomModal = ({ children, visible = false, onClose = () => { } }) => {
  const { backgroundCardColor, fontColor } = useTheme('')
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}
    >
      <View style={[styles.centeredView, { backgroundColor: backgroundCardColor }]}>
        <TouchableOpacity style={{ position: 'absolute', top: 30, right: 30, zIndex: 1 }} onPress={() => onClose()}>
          <IonIcon name="close-outline" size={30} color={fontColor} />
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 28, paddingVertical: 42 }}>
          {children}
        </View>
      </View>
    </Modal>
  )
}

export default BottomModal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 80,
    borderRadius: 30,
  },
})