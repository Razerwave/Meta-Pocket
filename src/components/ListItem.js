import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Stack from './Stack';
import StyledText from './texts/StyledText';
import CustomTouchableOpacity from './CustomTouchableOpacity';

const ListItem = ({label, icon, children, onPress, style}) => {
  return (
    <CustomTouchableOpacity disabled={!onPress} onPress={onPress} style={style}>
      <Stack direction="row" spacing={11} style={{alignItems: 'center'}}>
        {icon}
        <StyledText>{label}</StyledText>
        <View style={{flex: 1, alignItems: 'flex-end'}}>{children}</View>
      </Stack>
    </CustomTouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
