import styled from 'styled-components/native';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'

const ButtonPrimary = (props) => {
    return (
        <TouchableOpacity {...props}>
            <StyledButtonView>
                <StyledButtonText>{props.title}</StyledButtonText>
            </StyledButtonView>
        </TouchableOpacity>
    )
}

const StyledButtonView = styled.View`
    marginBottom: 30px;
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