import { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import { useTheme } from 'styled-components'
import { white } from '../../constants/colors'

const CustomSearch = ({ value, onChange, placeholder, onPress, btnText = "ok", action, error = false }) => {
  const [focused, setFocused] = useState(false)
  const { input: {
    backgroundColor,
    borderColor,
    borderColorFocus,
    borderColorError,
    placeholerColor,
    inputColor,
    btnColor,
  } } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor, borderColor: error ? borderColorError : focused ? borderColorFocus : borderColor }]}>
      <TextInput
        editable
        style={[styles.input, { color: inputColor }]}
        placeholderTextColor={placeholerColor}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {onPress && (
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={onPress}>
            <View style={[styles.btn, { color: btnColor }]}>
              <Text style={styles.btnText}>{btnText}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {action}
    </View>
  )
}

export default CustomSearch

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
    paddingHorizontal: 9,
    fontFamily: 'Lato',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
  },
  btn: {
    backgroundColor: '#838AA5',
    borderRadius: 4,
  },
  btnText: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '600',
    color: white,
  }
})