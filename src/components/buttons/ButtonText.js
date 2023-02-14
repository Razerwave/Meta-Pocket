import { StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import { Text } from 'react-native-svg'
import { red } from '../../constants/colors'

const ButtonText = ({type = 1, onPress, icon, children}) => {
  return (
    <TouchableOpacity>
      <Text style={{ fontSize: 14, lineHeight: 21, color: red }}>
        {children}
      </Text>
    </TouchableOpacity>
    // <TouchableOpacity onPress={onPress}>
    //   <Stack direction='row' spacing={6}>
    //     {icon}
    //     <Text style={{ fontSize: 12, lineHeight: 16 }}>
    //       {children}
    //     </Text>
    //   </Stack>
    // </TouchableOpacity>
  )
}

export default ButtonText

const styles = StyleSheet.create({})