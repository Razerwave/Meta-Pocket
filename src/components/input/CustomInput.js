import { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import { useTheme } from 'styled-components'

const CustomInput = ({ value, onChange, placeholder, onPress, btnText = "ok", action, error = false }) => {
  const [focused, setFocused] = useState(false)

  return (
    <View style={[styles.container, { borderColor: error ? '#FF3D60' : focused ? '#C2C2C2' : "#262637" }]}>
      <TextInput
        style={[styles.input]}
        editable
        // textAlignVertical="top"
        placeholderTextColor="#838AA5"
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {onPress && (
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>{btnText}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {action}
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#262637",
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
    color: 'white',
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
    color: '#FFFFFF',
  }
})