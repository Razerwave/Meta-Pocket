import {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useTheme} from 'styled-components';
import {white} from '../../constants/colors';
import {fontBody} from '../../constants/fonts';
import BodyText from '../texts/BodyText';

const CustomInput = ({
  value,
  onChange,
  placeholder,
  onPress,
  btnText = 'ok',
  action,
  error = false,
  keyboardType,
  textAlign,
  style,
}) => {
  const [focused, setFocused] = useState(false);
  const {
    input: {
      backgroundColor,
      borderColor,
      borderColorFocus,
      borderColorError,
      placeholerColor,
      inputColor,
      btnColor,
    },
  } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          borderColor: error
            ? borderColorError
            : focused
            ? borderColorFocus
            : borderColor,
          ...style,
        },
      ]}>
      <TextInput
        editable
        style={[styles.input, {color: inputColor}]}
        placeholderTextColor={placeholerColor}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        textAlign={textAlign}
        keyboardType={keyboardType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {onPress && (
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={onPress}>
            <View
              style={[
                styles.btn,
                {color: btnColor, backgroundColor: btnColor},
              ]}>
              <BodyText type={9} style={styles.btnText}>
                {btnText}
              </BodyText>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {action}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  input: {
    flex: 1,
    padding: 0,
    fontFamily: fontBody,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
  },
  btn: {
    borderRadius: 4,
  },
  btnText: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    fontFamily: 'Poppins',
    color: white,
    minWidth: 50,
    textAlign: 'center',
  },
});
