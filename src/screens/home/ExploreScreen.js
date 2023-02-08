import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { CardBox, HomeScreen, Stack, StyledText } from '../../components';
import { useTheme } from 'styled-components';
import { ROUTES } from '../../constants';

const links = [
  {
    id: 1,
    Subject: 'Amaraa',
    Description: '#FF0000',
    Image: require('../../assets/images.jpg'),
  },
  {
    id: 2,
    Subject: 'Tsogoo',
    Description: '#800000',
    Image: require('../../assets/images.jpg'),
  },
  {
    id: 3,
    Subject: 'Bat',
    Description: '#808000',
    Image: require('../../assets/images.jpg'),
  },
];

const data = [
  { title: 'Title 1', links: links },
  { title: 'Title 2', links: links },
  { title: 'Title 3', links: links },
];

const ExploreScreen = ({ navigation }) => {
  const { fontColor } = useTheme();
  const WEB_LINK = 'https://www.youtube.com/';

  return (
    <HomeScreen>
      <Stack spacing={32} padding={16}>
        {data.map((item, index) => (
          <Stack key={index} spacing={16}>
            <TitleAndArrow>
              <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
                {item.title}
              </StyledText>
              <IonIcon
                onPress={() =>
                  navigation.navigate(ROUTES.EXPLORE.LIST_SCREEN, {
                    data: item.links,
                    title: item.title,
                  })
                }
                name="arrow-forward"
                size={25}
                color={fontColor}
              />
            </TitleAndArrow>
            <Stack direction="row" spacing={16}>
              {item?.links?.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{ flex: 1 }}
                  onPress={() => navigation.navigate(ROUTES.EXPLORE.WEB, {
                    uri: WEB_LINK
                  })}>
                  <Stack style={{ height: 100 }} spacing={8}>
                    <CardBox style={{ flex: 1 }}></CardBox>
                    <StyledText style={{ textAlign: 'center' }}>
                      {item.Subject}
                    </StyledText>
                  </Stack>
                </TouchableOpacity>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </HomeScreen>
  );
};

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: '#808000';
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

const TitleAndArrow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;

export default ExploreScreen;
