import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { IconArrowDown } from '../../assets/icons';
import StyledText from '../texts/StyledText';

const CustomSelect = ({ value, onChange}) => {
  const [focused, setFocused] = useState(false);

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <StyledText style={styles.text}>{value}</StyledText>
        <IconArrowDown />
      </View>
    </TouchableOpacity>
  )
}

export default CustomSelect

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Noto Sans',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 16,
  },
})