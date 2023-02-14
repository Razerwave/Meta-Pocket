import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { primary, white } from '../../constants/colors';
import { ButtonTextSize, ButtonTextWeight, fontButton } from '../../constants/fonts';

const ButtonPrimary = ({ type = 1, disabled, style, ...props }) => {
    return (
        <TouchableOpacity {...props} style={{ flexDirection: 'row', ...style }} disabled={disabled}>
            <View style={[styles.container, { opacity: disabled ? 0.5 : 1 }]}>
                <Text style={[styles.text, { 
                    fontSize: ButtonTextSize[type],
                    fontWeight: ButtonTextWeight[type],
                }]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        maxWidth: 270,
        minWidth: 100,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: primary,
    },
    text: {
        fontFamily: fontButton,
        textAlign: 'center',
        color: white,
    },
})

export default ButtonPrimary