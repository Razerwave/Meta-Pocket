import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  CardBox,
  HomeScreen,
  LayoutScreen,
  Stack,
  StyledText,
} from '../../components';
import {useTheme} from 'styled-components';
import {ROUTES} from '../../constants';
import WebScreen from '../WebScreen';

import {links, testData} from '../../constants/ListData';
const ExploreScreen = ({navigation}) => {
  const {fontColor} = useTheme();
  const WEB_LINK = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const [item, setItem] = useState([]);
  const [art, setArt] = useState([]);
  const [article, setArticle] = useState([]);
  const [all, setAll] = useState([
    {
      title: 'All',
      links: links,
      icons: require('../../assets/icons/all.png'),
    },
  ]);
  // const [favorite, setFavorite] = useState(true);
  const [website, setWebsite] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(testData);
    };

    getData();
  }, []);

  return (
    <HomeScreen>
      <Stack padding={16}>
        {data.map(({title, icons, items}, index) => {
          return (
            <Stack key={index}>
              <Stack>
                <Stack
                  direction="row"
                  style={{
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                  }}>
                  <Stack
                    direction="row"
                    style={{
                      textAlign: 'center',
                      alignItems: 'center',
                      gap: 7,
                    }}>
                    <Image source={icons} style={{width: 14, height: 14}} />
                    <StyledText>{title}</StyledText>
                  </Stack>

                  <IonIcon
                    onPress={() =>
                      navigation.navigate(ROUTES.EXPLORE.LIST_SCREEN, {
                        data: items,
                        title: testData,
                      })
                    }
                    name="chevron-forward-outline"
                    size={25}
                    color={fontColor}
                  />
                </Stack>
              </Stack>

              <Stack>
                <Stack>
                  {title !== 'All' && title !== 'Favorite' ? (
                    <Stack>
                      <Stack
                        spacing={10}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}>
                        {items.map((item, index) => {
                          if (index < 4) {
                            return (
                              <Stack
                                key={index}
                                style={{
                                  alignItems: 'center',
                                  flex: 1,
                                  height: 'auto',
                                  flexWrap: 'wrap',
                                }}>
                                <TouchableOpacity
                                  onPress={() =>
                                    navigation.navigate(ROUTES.EXPLORE.WEB, {
                                      uri: WEB_LINK,
                                      title: title,
                                    })
                                  }
                                  style={{
                                    flex: 1,
                                    height: 102,
                                    width: 150,
                                    alignItems: 'center',
                                    backgroundColor: '#262637',
                                    borderRadius: 4,
                                  }}>
                                  <StyledText
                                    style={{
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      textAlign: 'center',
                                    }}>
                                    {item.Subject}
                                  </StyledText>
                                </TouchableOpacity>

                                {title !== 'Website' && (
                                  <Stack style={{gap: 8}}>
                                    <StyledText>{item.Subject}</StyledText>
                                    <StyledText style={{color: '#777777'}}>
                                      {item.Subject}
                                    </StyledText>
                                  </Stack>
                                )}
                              </Stack>
                            );
                          }
                        })}
                      </Stack>
                    </Stack>
                  ) : null}
                </Stack>
                {title !== 'Article' && (
                  <Stack
                    style={{
                      borderWidth: 1,
                      borderColor: '#313545',
                      marginVertical: 20,
                    }}></Stack>
                )}
              </Stack>
            </Stack>
          );
        })}
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
  border-radius: 4px;
`;

export default ExploreScreen;
