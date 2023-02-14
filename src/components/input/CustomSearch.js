import { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import { useTheme } from 'styled-components'
import { IconSearch } from '../../assets/icons'
import { white } from '../../constants/colors'
import { BodyTextSize, BodyTextWeight, fontBody } from '../../constants/fonts'

const CustomSearch = ({ value, onChange, placeholder, onEndEditing }) => {
  const [focused, setFocused] = useState(false)
  const { search: {
    borderColor,
    placeholerColor,
    inputColor,
  } } = useTheme()

  return (
    <View style={[styles.container, { borderColor: borderColor }]}>
      <IconSearch />
      <TextInput
        editable
        style={[styles.input, { color: inputColor }]}
        placeholderTextColor={placeholerColor}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onEndEditing={onEndEditing}
      />
    </View>
  )
}

export default CustomSearch

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9999,
    borderWidth: 1,
    borderStyle: 'solid',
    gap: 10,
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 0,
    fontFamily: fontBody,
    fontSize: BodyTextSize[5],
    fontWeight: BodyTextWeight[5],
    // height: 14,
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