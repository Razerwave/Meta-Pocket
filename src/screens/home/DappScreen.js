import React, {useState, useEffect} from 'react';
import {Image, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  BodyText,
  ButtonPrimary,
  LayoutScreen,
  LayoutScroll,
} from '../../components';
import {useTheme} from 'styled-components';
import {ROUTES} from '../../constants';
import {Dappdata} from '../../constants/ListData';
import {neutral100, neutral300} from '../../constants/colors';
import {IconDappArrow} from '../../assets/icons';
import styled from 'styled-components/native';
import {View} from 'react-native-animatable';

const DappScreen = ({navigation}) => {
  const {backgroundColor, steps, exploreTab} = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(Dappdata);
    };

    getData();
  }, []);
  const layout = useWindowDimensions();

  const AllTab = () => {
    return (
      <LayoutScreen>
        <LayoutScroll>
          <Container>
            <Content>
              {data.map((item, index) => {
                return (
                  <View key={index}>
                    <AllTabTouchableOpacity
                      onPress={() =>
                        navigation.navigate(ROUTES.ENTERPASS.ENTRYPASS_SCREEN)
                      }>
                      <Card>
                        <ArrowIcon
                          onPress={() =>
                            navigation.navigate(
                              ROUTES.ENTERPASS.ENTRYPASS_SCREEN,
                            )
                          }>
                          <IconDappArrow />
                        </ArrowIcon>
                        <ImageContainer>
                          <Image source={item.image} />
                        </ImageContainer>
                      </Card>
                    </AllTabTouchableOpacity>

                    <DescriptionContainer>
                      <BodyText
                        type={8}
                        style={{marginTop: 10, marginBottom: 6}}>
                        {item.title}
                      </BodyText>
                      <BodyText type={7} style={{color: neutral100}}>
                        {item.description}
                      </BodyText>
                    </DescriptionContainer>
                  </View>
                );
              })}

              <ButtonPrimary
                title="send BTC"
                onPress={() => {
                  navigation.navigate(ROUTES.SENDBTC.SENDBTC_SCREEN);
                }}
              />
            </Content>
          </Container>
        </LayoutScroll>
      </LayoutScreen>
    );
  };
  const PopularTab = () => {
    return (
      <LayoutScreen>
        <LayoutScroll>
          <Container>
            <Content>
              {data.map((item, index) => {
                if (index < 8) {
                  return (
                    item.type === 'Popular' && (
                      <View key={index}>
                        <AllTabTouchableOpacity
                          onPress={() =>
                            navigation.navigate(
                              ROUTES.ENTERPASS.ENTRYPASS_SCREEN,
                            )
                          }>
                          <Card>
                            <ArrowIcon
                              onPress={() =>
                                navigation.navigate(
                                  ROUTES.ENTERPASS.ENTRYPASS_SCREEN,
                                )
                              }>
                              <IconDappArrow />
                            </ArrowIcon>
                            <ImageContainer>
                              <Image source={item.image} />
                            </ImageContainer>
                          </Card>
                        </AllTabTouchableOpacity>

                        <DescriptionContainer>
                          <BodyText
                            type={8}
                            style={{marginTop: 10, marginBottom: 6}}>
                            {item.title}
                          </BodyText>
                          <BodyText type={7} style={{color: neutral100}}>
                            {item.description}
                          </BodyText>
                        </DescriptionContainer>
                      </View>
                    )
                  );
                }
              })}
            </Content>
          </Container>
        </LayoutScroll>
      </LayoutScreen>
    );
  };

  const MiningTab = () => {
    return (
      <LayoutScreen>
        <LayoutScroll>
          <Container>
            <Content>
              {data.map((item, index) => {
                if (index < 6) {
                  return (
                    item.type === 'Mining' && (
                      <View key={index}>
                        <AllTabTouchableOpacity
                          onPress={() =>
                            navigation.navigate(
                              ROUTES.ENTERPASS.ENTRYPASS_SCREEN,
                            )
                          }>
                          <Card>
                            <ArrowIcon
                              onPress={() =>
                                navigation.navigate(
                                  ROUTES.ENTERPASS.ENTRYPASS_SCREEN,
                                )
                              }>
                              <IconDappArrow />
                            </ArrowIcon>
                            <ImageContainer
                              style={{marginBottom: 20, marginLeft: 20}}>
                              <Image source={item.image} />
                            </ImageContainer>
                          </Card>
                        </AllTabTouchableOpacity>

                        <DescriptionContainer>
                          <BodyText
                            type={8}
                            style={{marginTop: 10, marginBottom: 6}}>
                            {item.title}
                          </BodyText>
                          <BodyText type={7} style={{color: neutral100}}>
                            {item.description}
                          </BodyText>
                        </DescriptionContainer>
                      </View>
                    )
                  );
                }
              })}
            </Content>
          </Container>
        </LayoutScroll>
      </LayoutScreen>
    );
  };

  const renderScene = SceneMap({
    AllTab: AllTab,
    PopularTab: PopularTab,
    MiningTab: MiningTab,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'AllTab', title: 'All'},
    {key: 'PopularTab', title: 'Popular'},
    {key: 'MiningTab', title: 'Mining'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={[{backgroundColor: backgroundColor}]}
          contentContainerStyle={{
            color: 'pink',
            fontSize: 10,
          }}
          pressColor={'inherit'}
          tabStyle={{
            width: 70,
            padding: 0,
          }}
          pagerStyle={{
            color: 'pink',
            marginTop: 15,
          }}
          TabBarItemProps
          // renderLabel={({route, focused, color}) => {
          //   console.log(route, color);
          //   return (
          //     <Text focused style={{color, margin: 8}}>
          //       {route.title}
          //     </Text>
          //   );
          // }}
          inactiveColor={exploreTab.tabInActiveColor}
          indicatorContainerStyle={{}}
          labelStyle={{
            fontSize: 16,
            fontWeight: 400,
            textTransform: 'capitalize',
          }}
          sceneContainerStyle={{color: 'pink'}}
          activeColor={exploreTab.tabActiveColor}
          indicatorStyle={[
            {
              backgroundColor: exploreTab.tabActiveColor,
              height: 2,
            },
          ]}
        />
      )}
    />
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
