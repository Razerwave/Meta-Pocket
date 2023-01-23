import styled from 'styled-components/native';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';

const ButtonPrimary = (props) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            {...props}
        >
            <View style={[styles.button, {backgroundColor: colors.primary}]}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     paddingTop: 60,
    //     alignItems: 'center',
    // },
    button: {
        marginBottom: 30,
        // width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
    },
});

export default ButtonPrimary