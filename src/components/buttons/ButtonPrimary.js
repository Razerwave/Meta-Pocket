import styled from 'styled-components/native';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'

const ButtonPrimary = ({ disabled, ...props }) => {
    return (
        <TouchableOpacity {...props} disabled={disabled}>
            <StyledButtonView style={{ opacity: disabled ? 0.5 : 1 }}>
                <StyledButtonText>{props.title}</StyledButtonText>
            </StyledButtonView>
        </TouchableOpacity>
    )
}

const StyledButtonViewDisabled = styled.View`
    alignItems: center;
    background-color: gray;
    padding: 10px;
    border-radius: 30px;
`

const StyledButtonView = styled.View`
    width: 266px;
    height: 40px;
    alignItems: center;
    background-color: ${props => props.theme.activeTintColor};
    padding: 10px;
    border-radius: 30px;
`

const StyledButtonText = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${props => props.theme.fontColor};
`

export default ButtonPrimary