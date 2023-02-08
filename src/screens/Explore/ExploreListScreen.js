import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { CardBox, HomeScreen, Screen, Stack, StyledText } from '../../components';
import { useTheme } from 'styled-components';
import IonIcon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';
import { ROUTES } from '../../constants';

const ExploreListScreen = ({ navigation, route }) => {
  const { fontColor, activeTintColor } = useTheme();
  const data = route.params.data;
  const title = route.params.title;
  const WEB_LINK = 'https://www.youtube.com/';

  return (
    <HomeScreen>
      <Stack spacing={16} padding={16}>
        {data.map(index => (
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.EXPLORE.WEB, { uri: WEB_LINK })}
            key={index.Subject}
            fontColor={fontColor}
            style={{ flexDirection: 'row', gap: 16 }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderWidth: 1,
                borderColor: fontColor,
              }}></View>
            <Stack style={{ flex: 1 }}>
              <Stack
                direction="row"
                style={{ borderWidth: 1, borderColor: 'gray' }}>
                <StyledText style={{ fontWeight: 'bold', paddingHorizontal: 8 }}>
                  {index.Subject}
                </StyledText>
              </Stack>

              <Stack>
                <StyledText
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    paddingHorizontal: 8,
                  }}>
                  {index.Description}
                </StyledText>
              </Stack>
            </Stack>
          </TouchableOpacity>
        ))}
      </Stack>
    </HomeScreen>
  );
};

export default ExploreListScreen;
