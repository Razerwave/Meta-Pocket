import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {WebView} from 'react-native-webview';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  CardBox,
  Divider,
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
  const [all, setAll] = useState();
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
        {data.map(({title, icons, items, key}, index) => {
          return (
            <Stack key={index}>
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
                      key: key,
                      title: title,
                      tabIndex: index,
                    })
                  }
                  name="chevron-forward-outline"
                  size={25}
                  color={fontColor}
                />
              </Stack>

              <Stack>
                {title == 'Website' && (
                  <Stack
                    spacing={10}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}>
                    {items.map((item, index) => {
                      if (index < 4) {
                        return (
                          <Stack
                            key={index}
                            style={{
                              alignItems: 'center',
                              height: 'auto',
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
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                              }}>
                              <Stack
                                style={{
                                  flex: 1,
                                  flexDirection: 'row-reverse',
                                  justifyContent: 'space-between',
                                  alignSelf: 'flex-end',
                                }}>
                                <TouchableOpacity
                                  style={{
                                    alignSelf: 'flex-end',
                                    alignSelf: 'flex-end',
                                    marginBottom: 10,
                                    marginRight: 7,
                                  }}>
                                  {item.fav == true ? (
                                    <Image
                                      source={require('../../assets/icons/Vector.png')}
                                      style={{width: 14, height: 14}}
                                    />
                                  ) : (
                                    <Image
                                      source={require('../../assets/icons/favorite.png')}
                                      style={{width: 14, height: 14}}
                                    />
                                  )}
                                </TouchableOpacity>
                                <Stack
                                  style={{marginBottom: 20, marginLeft: 20}}>
                                  <Image source={item.logo} />
                                </Stack>
                              </Stack>
                            </TouchableOpacity>

                            <Stack style={{alignSelf: 'flex-start'}}>
                              <StyledText
                                style={{marginTop: 10, marginBottom: 6}}>
                                {item.Subject}
                              </StyledText>
                              <StyledText style={{color: '#777777'}}>
                                {item.Subject}
                              </StyledText>
                            </Stack>
                          </Stack>
                        );
                      }
                    })}
                  </Stack>
                )}
                {title == 'Art' && (
                  <Stack
                    spacing={10}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}>
                    {items.map((item, index) => {
                      if (index < 4) {
                        return (
                          <Stack
                            key={index}
                            style={{
                              alignItems: 'center',
                              height: 'auto',
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
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                              }}>
                              <Stack
                                style={{
                                  height: 102,
                                  flex: 100,
                                }}>
                                <ImageBackground
                                  source={item.image}
                                  style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                  }}
                                  resizeMode="cover">
                                  <Stack
                                    style={{
                                      justifyContent: 'flex-end',
                                      flex: 1,
                                    }}>
                                    <TouchableOpacity
                                      style={{
                                        alignSelf: 'flex-end',
                                        marginBottom: 10,
                                        marginRight: 10,
                                      }}>
                                      {item.fav == true ? (
                                        <Image
                                          source={require('../../assets/icons/Vector.png')}
                                          style={{width: 14, height: 14}}
                                        />
                                      ) : (
                                        <Image
                                          source={require('../../assets/icons/favorite.png')}
                                          style={{width: 14, height: 14}}
                                        />
                                      )}
                                    </TouchableOpacity>
                                  </Stack>
                                </ImageBackground>
                              </Stack>
                            </TouchableOpacity>

                            <Stack style={{alignSelf: 'flex-start'}}>
                              <StyledText
                                style={{
                                  marginTop: 10,
                                  marginBottom: 6,
                                }}>
                                {item.name}
                              </StyledText>
                              <Stack style={{flexDirection: 'row'}}>
                                <StyledText style={{color: '#777777'}}>
                                  {item.total}
                                </StyledText>
                                <StyledText style={{color: '#777777'}}>
                                  {item.coin}
                                </StyledText>
                              </Stack>
                            </Stack>
                          </Stack>
                        );
                      }
                    })}
                  </Stack>
                )}
              </Stack>
              {title !== 'Art' && (
                <Stack style={{marginVertical: 20}}>
                  <Divider></Divider>
                </Stack>
              )}
            </Stack>
          );
        })}
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity>
            <Stack
              style={{
                width: 34,
                height: 34,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 60,
                backgroundColor: '#236BFE',
              }}>
              <Text style={{color: 'white'}}>
                <IonIcon name="arrow-up-outline" size={25} color={fontColor} />
              </Text>
            </Stack>
          </TouchableOpacity>
        </View>
      </Stack>
    </HomeScreen>
  );
};

export default ExploreScreen;
