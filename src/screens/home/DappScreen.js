import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { View } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ROUTES } from '../../constants';
import { Dappdata } from '../../constants/ListData';
import { neutral100, neutral300 } from '../../constants/colors';
import { IconDappArrow } from '../../assets/icons';
import {
  BodyText,
  LayoutScreen,
  LayoutScroll,
  CustomTabs,
} from '../../components';

const TAB_ROUTES = [
  { key: 'AllTab', title: 'All' },
  { key: 'PopularTab', title: 'Popular' },
  { key: 'MiningTab', title: 'Mining' },
];

const DappScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setData(Dappdata);
  }, []);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'AllTab':
        return <DappTab data={data} onPress={() => navigation.navigate(ROUTES.ENTERPASS.ENTRYPASS_SCREEN)} />;
      case 'PopularTab':
        return <DappTab data={data.filter(({ type }) => 'Popular' ? type === 'Popular' : true)} onPress={() => navigation.navigate(ROUTES.ENTERPASS.ENTRYPASS_SCREEN)}  />;
      case 'MiningTab':
        return <DappTab data={data.filter(({ type }) => 'Mining' ? type === 'Mining' : true)} onPress={() => navigation.navigate(ROUTES.ENTERPASS.ENTRYPASS_SCREEN)}  />;
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

const DappTab = ({ data = [], onPress }) => {
  return (
    <LayoutScreen>
      <LayoutScroll>
        <Container>
          <Content>
            {data.map((item, index) => (
              <View key={index}>
                <AllTabTouchableOpacity onPress={() => onPress(item)}>
                  <Card>
                    <ArrowIcon>
                      <IconDappArrow />
                    </ArrowIcon>
                    <ImageContainer
                      style={{ marginBottom: 20, marginLeft: 20 }}>
                      <Image source={item.image} />
                    </ImageContainer>
                  </Card>
                </AllTabTouchableOpacity>

                <DescriptionContainer>
                  <BodyText
                    type={8}
                    style={{ marginTop: 10, marginBottom: 6 }}>
                    {item.title}
                  </BodyText>
                  <BodyText type={7} style={{ color: neutral100 }}>
                    {item.description}
                  </BodyText>
                </DescriptionContainer>
              </View>
            ))}
          </Content>
        </Container>
      </LayoutScroll>
    </LayoutScreen>
  );
};

const AllTabTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  height: 102px;
  width: 150px;
  background-color: ${neutral300};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

const Container = styled.View`
  padding: 30px;
  gap: 20px;
  border-top-width: 1px;
  border-color: ${props => props.theme.tabIndicatorColor};
`;

const Content = styled.View`
  gap: 20px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Card = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-self: flex-end;
`;

const ArrowIcon = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 10px;
  margin-right: 7px;
`;

const ImageContainer = styled.View`
  margin-bottom: 20px;
  margin-left: 20px;
`;

const DescriptionContainer = styled.View`
  align-self: flex-start;
`;

export default DappScreen;
