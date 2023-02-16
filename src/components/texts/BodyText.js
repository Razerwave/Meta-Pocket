import React from 'react';
import {BodyTextSize, BodyTextWeight, fontBody} from '../../constants/fonts';
import {useTheme} from 'styled-components';
import {Text, StyleSheet} from 'react-native';

const BodyText = ({type = 4, style, children, ...props}) => {
  const {fontColor} = useTheme();
  return (
    <Text
      style={[
        styles.text,
        {
          color: fontColor,
          fontWeight: BodyTextWeight[type],
          fontSize: BodyTextSize[type],
          ...style,
          ...props
        },
      ]}>
      {children}
    </Text>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: fontBody,
  },
});
