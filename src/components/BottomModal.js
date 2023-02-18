import React from 'react';
import { useTheme } from 'styled-components';
import { Modal, StyleSheet, TouchableOpacity, View, Pressable } from 'react-native';
import BodyHeading from './texts/BodyHeading';
import { IconCloseX } from '../assets/icons';

const BottomModal = ({
  children,
  title,
  visible = false,
  onClose = () => { },
}) => {
  const {
    card: { bgColor },
    fontColor,
  } = useTheme('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}
    >
      <Pressable style={{ height: 94 }} onPress={() => onClose(false)} />
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <TouchableOpacity style={styles.btnClose} onPress={() => onClose()}>
          <IconCloseX size={30} color={fontColor} />
        </TouchableOpacity>
        {title && <View style={styles.heading}>
          <BodyHeading>{title}</BodyHeading>
        </View>}
        <View style={styles.body}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 28,
    paddingVertical: 42,
  },
  btnClose: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 9999
  },
  heading: {
    marginBottom: 20,
  },
  body: {
    flex: 1,
  },
});
