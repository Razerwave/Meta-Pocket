import styled from 'styled-components/native';
import { View, Text, Button, Alert, StyleSheet } from 'react-native'

const Screen = ({ children, bottom }) => {
    return (
        <StyledViewContainer>
            {children}
            <StyledViewBottom>
                {bottom}
            </StyledViewBottom>
        </StyledViewContainer>
    )
}

const StyledViewContainer = styled.View`
    flex: 1;
    gap: 15px;
    background-color: ${props => props.theme.backgroundColor};
`


const StyledViewBottom = styled.View`
    flex: 1;
    justify-content: flex-end;
    background-color: ${props => props.theme.backgroundColor};
`

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // alignItems: 'center'
//     },
//     bottom: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         paddingBottom: 36
//     },
// })

export default Screen