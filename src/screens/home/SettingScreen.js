import React from 'react'
import { View, Text, Button, Alert, StyleSheet, Switch } from 'react-native'
import { ButtonPrimary, CardBox, HomeScreen, Screen, Stack, StyledText } from '../../components'
import { useThemeChange } from '../../context/ThemeChangeContext'
import { useTheme } from 'styled-components'
import { ROUTES } from '../../constants'
import IonIcon from 'react-native-vector-icons/Ionicons';
import useAuth from '../../context/AuthContext'

const SettingScreen = ({ navigation }) => {
  const { setPassword } = useAuth();
  const { fontColor, activeTintColor } = useTheme()
  const { theme, toggleTheme } = useThemeChange()
  const isEnabled = theme === "dark"

  const logoutHandler = () => {
    setPassword(null)
  }

  return (
    <HomeScreen>
      <Stack padding={16} spacing={32}>
        <ListItem label="My UID">
          <StyledText>12345</StyledText>
        </ListItem>
        <ListItem label="Dark Mode">
          <Switch
            style={{ flex: 1 }}
            trackColor={{ false: 'lightgray', true: activeTintColor }}
            thumbColor={'gray'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={isEnabled}
          />
        </ListItem>
        <ListItem label="Language">
          <StyledText>OK</StyledText>
        </ListItem>
        <ListItem label="Reset Passcode">
          <StyledText onPress={() => navigation.navigate(ROUTES.SETTING.PASSCODE_RESET)}>
            <IonIcon name="arrow-forward" size={18} color={fontColor} />
          </StyledText>
        </ListItem>
        <ListItem label="Version">
          <StyledText>1.0.0</StyledText>
        </ListItem>
      </Stack>
      <Stack direction='row' spacing={16} padding={16} style={{ marginTop: 48, justifyContent: 'space-evenly' }}>
        <CardBox style={{ width: 50, height: 50 }}></CardBox>
        <CardBox style={{ width: 50, height: 50 }}></CardBox>
        <CardBox style={{ width: 50, height: 50 }}></CardBox>
      </Stack>
      <Stack padding={16} spacing={32}>
        <ButtonPrimary title="Logout" onPress={logoutHandler} />
      </Stack>
    </HomeScreen>
  )
}

const ListItem = ({ label, children }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <StyledText>{label}</StyledText>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        {children}
      </View>
    </View>
  )
}

export default SettingScreen
