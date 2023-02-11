import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import { useTheme } from 'styled-components'

const CustomInput = ({ value, onChange, placeholder, onPress, btnText = "ok", action }) => {
  const { fontColor, backgroundCardColor } = useTheme()
  return (
    <View style={[styles.container]}>
      <TextInput
        style={[styles.input]}
        editable
        // textAlignVertical="top"
        placeholderTextColor="#838AA5"
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
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
    color: '#FFFFFF',
  }
})