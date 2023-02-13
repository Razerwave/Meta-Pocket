import styled from 'styled-components/native';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

const Stack = ({
  children,
  direction = 'column',
  spacing,
  padding = 0,
  paddingHorizontal,
  alignItems,
  marginTop,
  marginBottom,
  marginHorizontal,
  style,
}) => {
  return (
    <View
      style={[
        {
          padding: padding,
          flexDirection: direction,
          gap: spacing,
          alignItems,
          marginHorizontal,
          marginTop,
          marginBottom,
          paddingHorizontal,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

// const StyledView = styled.View`
//   background-color: ${props => props.theme.backgroundColor};
// `

export default Stack;
