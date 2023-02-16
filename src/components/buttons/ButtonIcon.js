import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {neutral100, primary, white} from '../../constants/colors';
import BodyText from '../texts/BodyText';
import Stack from '../Stack';

const ButtonIcon = ({
  icon,
  children,
  onPress = () => {},
  borderColor = primary,
  size = 50,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Stack spacing={10} alignItems="center">
        <View style={[styles.outer, {width: size, height: size}]}>
          <View style={[styles.inner, {borderColor}]}>{icon}</View>
        </View>
        {children && (
          <BodyText type={12} style={{color: white}}>
            {children}
          </BodyText>
        )}
      </Stack>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  outer: {
    borderRadius: 9999,
  },
  inner: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
    borderWidth: 2,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary,
  },
});
