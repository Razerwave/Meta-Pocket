import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import {
  BodyText,
  Divider,
  LayoutScreen,
  LayoutScroll,
  Stack,
} from '../../components';
import { ROUTES } from '../../constants';

import { testData } from '../../constants/ListData';
import { IconColorDot, IconExploreArrow } from '../../assets/icons';
import { yellow200, red, neutral300, neutral100 } from '../../constants/colors';

const ExploreScreen = ({ navigation }) => {
  const WEB_LINK = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(testData);
    };

    getData();
  }, []);

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Container1>
          {data.map(({ title, items, key, ...item }, index) => {
            return (
              <View key={index}>
                <Container>
                  <Title>
                    <IconColorDot color={item.dotColor} />
                    <TitleSection>{title}</TitleSection>
                  </Title>
                  <TouchableOpacity onPress={() => navigation.navigate(ROUTES.EXPLORE.LIST_SCREEN, { tabIndex: index, })}>
                    <IconExploreArrow />
                  </TouchableOpacity>
                </Container>

                <View>
                  <ContainerWeb>
                    {items.slice(0, 4).map((item, index) => title == 'Website' ? (
                      <View key={index}>
                        <AllTabTouchableOpacity onPress={() => navigation.navigate(ROUTES.EXPLORE.WEB, { uri: WEB_LINK, title: title })}>
                          <Card>
                            <FavoritePress>
                              <Image
                                source={item.star ? require('../../assets/icons/Vector.png') : require('../../assets/icons/favorite.png')}
                                style={{ width: 14, height: 14 }}
                              />
                            </FavoritePress>
                            <ImageContainer>
                              <Image source={item.logo} />
                            </ImageContainer>
                          </Card>
                        </AllTabTouchableOpacity>

                        <DescriptionContainer>
                          <BodyText type={8} style={{ marginTop: 10, marginBottom: 6, }}>
                            {item.title}
                          </BodyText>
                          <BodyText type={7} style={{ color: neutral100 }}>
                            {item.description}
                          </BodyText>
                        </DescriptionContainer>
                      </View>
                    ) : title == 'Art' && (
                      <View key={index}>
                        <AllTabTouchableOpacity onPress={() => navigation.navigate(ROUTES.BUY.BUY_SCREEN, { uri: WEB_LINK, item: item })}>
                          <ArtCard>
                            <ImageBackground source={item.image} style={{ flex: 1, justifyContent: 'center' }} resizeMode="cover">
                              <FavoriteSection>
                                <SetArtFavorite>
                                  <Image
                                    source={item.star ? require('../../assets/icons/Vector.png') : require('../../assets/icons/favorite.png')}
                                    style={{ width: 14, height: 14 }}
                                  />
                                </SetArtFavorite>
                              </FavoriteSection>
                            </ImageBackground>
                          </ArtCard>
                        </AllTabTouchableOpacity>

                        <View>
                          <BodyText
                            type={8}
                            style={{
                              marginTop: 10,
                              marginBottom: 6,
                            }}>
                            {item.title}
                          </BodyText>
                          <ArtSubtitle>
                            <BodyText
                              type={7}
                              style={{ color: neutral100 }}>
                              {item.total}
                            </BodyText>
                            <BodyText
                              type={7}
                              style={{ color: neutral100 }}>
                              {item.coin}
                            </BodyText>
                          </ArtSubtitle>
                        </View>
                      </View>
                    ))}
                  </ContainerWeb>
                </View>
                {title !== 'Art' && (
                  <Stack style={{ marginVertical: 20 }}>
                    <Divider></Divider>
                  </Stack>
                )}
              </View>
            );
          })}
          <View
            style={{
              alignItems: 'flex-end',
            }}></View>
        </Container1>
      </LayoutScroll>
    </LayoutScreen>
  );
};

const AllTabTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  height: 102px;
  width: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${neutral300};
`;

const Container1 = styled.View`
  padding: 16px;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  border-color: ${props => props.theme.tabIndicatorColor};
`;

const ContainerWeb = styled.View`
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const FavoritePress = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 10px;
  margin-right: 7px;
`;

const FavoriteSection = styled.View`
  justify-content: flex-end;
  flex: 1;
`;
const SetArtFavorite = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const Card = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-self: flex-end;
`;

const ArtCard = styled.View`
  flex: 1;
`;

const ImageContainer = styled.View`
  margin-bottom: 20px;
  margin-left: 20px;
`;

const DescriptionContainer = styled.View`
  align-self: flex-start;
`;

const Title = styled.View`
  flex-direction: row;
  text-align: center;
  align-items: center;
  gap: 7px;
`;

const TitleSection = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.theme.fontColor};
`;

const ArtSubtitle = styled.View`
  flex-direction: row;
`;
export default ExploreScreen;
