import styled from 'styled-components/native';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'

const ButtonPrimary = ({disabled, ...props}) => {
    const ButtonView = disabled ? StyledButtonViewDisabled : StyledButtonView
    return (
        <TouchableOpacity {...props} disabled={disabled}>
            <ButtonView>
                <StyledButtonText>{props.title}</StyledButtonText>
            </ButtonView>
        </TouchableOpacity>
    )
}

const StyledButtonViewDisabled = styled.View`
    border: 2px solid gray;
    alignItems: center;
    background-color: gray;
    padding: 10px;
    border-radius: 30px;
`

const StyledButtonView = styled.View`
    border: 2px solid ${props => props.theme.fontColor};
    alignItems: center;
    background-color: ${props => props.theme.backgroundColor};
    padding: 10px;
    border-radius: 30px;
`

const StyledButtonText = styled.Text`
    color: ${props => props.theme.fontColor};
`

export default ButtonPrimary