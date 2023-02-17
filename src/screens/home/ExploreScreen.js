import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import {
  BodyText,
  Divider,
  LayoutScreen,
  LayoutScroll,
  Stack,
  Card,
} from '../../components';
import {ROUTES} from '../../constants';

import {testData} from '../../constants/ListData';
import {IconColorDot, IconExploreArrow} from '../../assets/icons';
import {yellow200, red, neutral300, neutral100} from '../../constants/colors';

const ExploreScreen = ({navigation, onPress}) => {
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
        <Stack marginTop={22} paddingHorizontal={20}>
          {data.map(({title, items, key, ...item}, index) => {
            return (
              <View key={index}>
                {index !== 0 && <Divider marginBottom={30} />}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(ROUTES.EXPLORE.LIST_SCREEN, {
                      tabIndex: index,
                    })
                  }>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={8}
                    marginBottom={20}>
                    <IconColorDot size={6} color={item.dotColor} />
                    <BodyText fontWeight="600">{title}</BodyText>
                    <Stack style={{flex: 1, alignItems: 'flex-end'}}>
                      <IconExploreArrow />
                    </Stack>
                  </Stack>
                </TouchableOpacity>

                <View paddingLeft={15}>
                  <Stack
                    direction="row"
                    style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {items.slice(0, 4).map((item, index) => (
                      <View key={index} style={{marginBottom: 30}}>
                        <Card item={item} onPress={onPress} />
                      </View>
                    ))}
                  </Stack>
                </View>
              </View>
            );
          })}
        </Stack>
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
  flex-direction: row;
  justify-content: space-between;
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

const CardContainer = styled.View`
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

export default ExploreScreen;
