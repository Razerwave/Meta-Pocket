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
          onPress={(item) => navigation.navigate(ROUTES.BUY.BUY_SCREEN, { item: item })}
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
        <Container>
          {data.map((item, index) => (
            <Section key={index}>
              <ListTouchableOpacity onPress={() => onPress(item)}>
                <View style={{}}>
                  <IconColorDot color={dotColor} />
                </View>
                <ContentList>
                  <Content>
                    <BodyText type={5}>{item.title}</BodyText>
                    <BodyText type={7} style={{ color: gray300 }}>{item.description}</BodyText>
                  </Content>
                  <TouchableOpacity onPress={() => onPressStar(item)}>
                    <Image
                      source={item.star ? require('../../assets/icons/Vector.png') : require('../../assets/icons/favorite.png')}
                      style={{ width: 14, height: 14 }}
                    />
                  </TouchableOpacity>
                </ContentList>
              </ListTouchableOpacity>
            </Section>
          ))}
        </Container>
      </LayoutScroll>
    </LayoutScreen>
  );
};

const Container = styled.View`
  gap: 20px;
  padding: 16px;
  border-top-width: 1px;
  border-color: ${props => props.theme.tabIndicatorColor};
`;

const Section = styled.View`
  gap: 20px;
`;

const ListTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-self: flex-start;
`;

const ContentList = styled.View`
  gap: 20px;
  flex-direction: row;
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
`;
export default TabViewExample;
