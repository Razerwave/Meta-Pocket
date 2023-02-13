import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Stack from './Stack';
import StyledText from './texts/StyledText';

const ListItem = ({ label, icon, children, onPress }) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Stack direction='row' spacing={11} style={{ alignItems: 'center' }}>
        {icon}
        <StyledText>{label}</StyledText>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>{children}</View>
      </Stack>
    </TouchableOpacity>
  );
};

export default ListItem

const styles = StyleSheet.create({})