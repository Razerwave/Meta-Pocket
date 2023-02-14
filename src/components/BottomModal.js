import React from 'react'
import { useTheme } from 'styled-components'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import BodyHeading from './texts/BodyHeading';

const BottomModal = ({ children, title, visible = false, onClose = () => { } }) => {
  const { card: { bgColor }, fontColor } = useTheme('')
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}
    >
      <View style={[styles.centeredView, { backgroundColor: bgColor }]}>
        <TouchableOpacity style={styles.btnClose} onPress={() => onClose()}>
          <IonIcon name="close-outline" size={30} color={fontColor} />
        </TouchableOpacity>
        <View style={styles.body}>
          {title && <BodyHeading style={styles.heading}>{title}</BodyHeading>}
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
    marginTop: 94,
    borderRadius: 30,
  },
  btnClose: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1,
  },
  heading: {
    marginBottom: 20,
  },
  body: { 
    paddingHorizontal: 28, 
    paddingVertical: 42,
  },
})