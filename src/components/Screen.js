import { View, Text, Button, Alert, StyleSheet } from 'react-native'

const Screen = ({ children, bottom }) => {
    return (
        <View style={styles.container}>
            {children}
            <View style={styles.bottom}>
                {bottom}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 36
    },
})

export default Screen