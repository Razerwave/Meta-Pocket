import styled from 'styled-components/native';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { primary, white } from '../../constants/colors';
import { button1Size, button1Weight, fontButton } from '../../constants/fonts';

const ButtonPrimary = ({ type = 'solid', disabled, style, ...props }) => {
    const { bgStyle, textStyle } = ButtonStyles[type]
    return (
        <TouchableOpacity {...props} style={{ flexDirection: 'row' }} disabled={disabled}>
            <View style={[styles.container, bgStyle, { opacity: disabled ? 0.5 : 1 }]}>
                <Text style={[styles.text, textStyle]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const ButtonStyles = {
    solid: StyleSheet.create({
        bgStyle: {
            backgroundColor: primary,
        },
        textStyle: {
            color: white,
        },
    }),
    solidHover: {

    },
    outline: StyleSheet.create({
        bgStyle: {
        }
    }),
    text: {

    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        height: 40,
        flex: 1,
        maxWidth: 270,
        minWidth: 100,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontFamily: fontButton,
        fontSize: button1Size,
        fontWeight: 'bold',
    },
})

const StyledButtonView = styled.View`
    height: 40px;
    alignItems: center;
    background-color: ${props => props.theme.primaryColor};
    padding: 10px;
    border-radius: 30px;
`

const StyledButtonText = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${white};
`

export default ButtonPrimary