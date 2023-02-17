import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { ROUTES } from '../../constants';
import { ExploreData } from '../../constants/ListData';
import { gray300, red, yellow200 } from '../../constants/colors';
import { IconColorDot } from '../../assets/icons';
import {
  BodyText,
  CustomTabs,
  LayoutScreen,
  LayoutScroll,
  Stack,
} from '../../components';

const TAB_ROUTES = [
  { key: 'websiteTab', title: 'Website' },
  { key: 'artTab', title: 'Art' },
]

const TabViewExample = ({ navigation, route }) => {
  const [index, setIndex] = useState(route.params.tabIndex || 0);
  const [data, setData] = useState({})

  useEffect(() => {
    setData(ExploreData)
  }, [])

  const handlePressStar = (item) => {
    console.log('star', item)
  }

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'websiteTab':
        return <ExploreTab
          data={data.website}
          dotColor={yellow200}
          onPress={(item) => navigation.navigate(ROUTES.EXPLORE.WEB, { title: item.title, uri: item.url })}
          onPressStar={handlePressStar}
        />;
      case 'artTab':
        return <ExploreTab
          data={data.art}
          dotColor={red}
          onPress={(item) => navigation.navigate(ROUTES.EXPLORE.BUY_ITEM, { item: item })}
          onPressStar={handlePressStar}
        />;
    }
  };

  return (
    <CustomTabs
      tabIndex={index}
      onTabChange={setIndex}
      tabRoutes={TAB_ROUTES}
      renderScene={renderScene}
    />
  );
};

const ExploreTab = ({
  data = [],
  dotColor,
  onPress = () => { },
  onPressStar = () => { },
}) => {
  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack marginHorizontal={26} marginTop={20} spacing={20}>
          {data.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => onPress(item)}>
              <Stack direction='row' alignItems="center">
                <Stack marginBottom={6}>
                  <Stack direction='row' alignItems="center" spacing={10}>
                    <IconColorDot color={dotColor} size={8} />
                    <BodyText type={5}>{item.title}</BodyText>
                  </Stack>
                  <Stack style={{ marginLeft: 18 }}>
                    <BodyText type={7} style={{ color: gray300 }}>{item.description}</BodyText>
                  </Stack>
                </Stack>
                <Stack style={{ flex: 1, alignItems: 'flex-end' }}>
                  <TouchableOpacity onPress={() => onPressStar(item)}>
                    <Image
                      source={item.star ? require('../../assets/icons/Vector.png') : require('../../assets/icons/favorite.png')}
                      style={{ width: 14, height: 14 }}
                    />
                  </TouchableOpacity>
                </Stack>
              </Stack>
            </TouchableOpacity>
          ))}
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

export default TabViewExample;
