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
import {CardBox, HomeScreen, Stack, StyledText} from '../../components';
import {useTheme} from 'styled-components';
import {ROUTES} from '../../constants';

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
  {
    id: 4,
    Subject: 'Selenge',
    Description: '#808000',
    Image: require('../../assets/images.jpg'),
  },
];

const testData = [
  {
    title: 'All',
    items: links,
    icons: require('../../assets/icons/all.png'),
  },

  {
    title: 'Favorite',
    items: links,
    icons: require('../../assets/icons/Vector.png'),
  },

  {
    title: 'Website',
    items: links,
    icons: require('../../assets/icons/Ellipse93.png'),
  },

  {
    title: 'Item',
    items: links,
    icons: require('../../assets/icons/Ellipse94.png'),
  },

  {
    title: 'Art',
    items: links,
    icons: require('../../assets/icons/Ellipse95.png'),
  },

  {
    title: 'Article',
    items: links,
    icons: require('../../assets/icons/Ellipse96.png'),
  },
];

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
  const [favorite, setFavorite] = useState([]);
  const [website, setWebsite] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(testData);
    };

    getData();
  }, []);
  const handleClick = () => {
    console.log('clicked');
    return (
      <View style={{flex: 1, backgroundColor: 'red', height: 600, width: 600}}>
        <WebView source={{uri: 'https://reactnative.dev/'}} />
      </View>
    );
  };
  return (
    <HomeScreen>
      <Stack padding={16}>
        {data.map(({title, icons, items}, index) => (
          <Stack>
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
                  key={index}
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
                      data: data.links,
                      title: data.title,
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
                        console.log(item);
                        return (
                          <Stack style={{alignItems: 'center', gap: 8}}>
                            <TouchableOpacity
                              onPress={handleClick}
                              key={index}
                              style={{
                                height: 70,
                                width: 70,
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
  border-radius: 4px;
`;

export default ExploreScreen;
