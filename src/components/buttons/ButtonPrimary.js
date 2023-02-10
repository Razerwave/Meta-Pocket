import styled from 'styled-components/native';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { white } from '../../constants/colors';

const ButtonPrimary = ({ disabled, style, ...props }) => {
    return (
        <TouchableOpacity {...props} style={{width: '100%', ...style}} disabled={disabled}>
            <StyledButtonView style={{ opacity: disabled ? 0.5 : 1 }}>
                <StyledButtonText>{props.title}</StyledButtonText>
            </StyledButtonView>
        </TouchableOpacity>
    )
}

const StyledButtonView = styled.View`
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
    color: ${white};
`

export default ButtonPrimary