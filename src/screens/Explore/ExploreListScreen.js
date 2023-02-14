import React from 'react';
import {View, TouchableOpacity, Image, useWindowDimensions} from 'react-native';
import {BodyText, LayoutScreen, LayoutScroll} from '../../components';
import {useTheme} from 'styled-components';
import {ROUTES} from '../../constants';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {links, Artlinks} from '../../constants/ListData';
import {IconColorDot} from '../../assets/icons';
import styled from 'styled-components/native';
import {gray300, red, yellow200} from '../../constants/colors';

const TabViewExample = ({navigation, route}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(route.params.tabIndex || 0);

  const {backgroundColor, steps, exploreTab} = useTheme();

  const WebsiteTab = () => {
    return (
      <LayoutScreen>
        <LayoutScroll>
          <Container>
            {links.map((index, key) => (
              <Section key={key}>
                <ListTouchableOpacity
                  onPress={() =>
                    navigation.navigate(ROUTES.EXPLORE.WEB, {uri: index.url})
                  }>
                  <View>
                    <IconColorDot color={yellow200} />
                  </View>
                  <ContentList>
                    <Content>
                      <BodyText type={5}>{index.Subject}</BodyText>
                      <BodyText
                        type={7}
                        style={{
                          color: gray300,
                        }}>
                        {index.url}
                      </BodyText>
                    </Content>
                    <TouchableOpacity>
                      {index.fav == true ? (
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
                  </ContentList>
                </ListTouchableOpacity>
              </Section>
            ))}
          </Container>
        </LayoutScroll>
      </LayoutScreen>
    );
  };
  const ArtTabRoute = () => {
    return (
      <LayoutScreen>
        <LayoutScroll>
          <Container>
            {Artlinks.map((index, key) => (
              <Section key={key}>
                <ListTouchableOpacity
                  onPress={() =>
                    navigation.navigate(ROUTES.BUY.BUY_SCREEN, {
                      item: index,
                    })
                  }>
                  <View style={{}}>
                    <IconColorDot color={red} />
                  </View>
                  <ContentList>
                    <Content>
                      <BodyText type={5}>{index.name}</BodyText>
                      <BodyText
                        type={7}
                        style={{
                          color: gray300,
                        }}>
                        {index.author}
                      </BodyText>
                    </Content>
                    <TouchableOpacity>
                      {index.fav == true ? (
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
                  </ContentList>
                </ListTouchableOpacity>
              </Section>
            ))}
          </Container>
        </LayoutScroll>
      </LayoutScreen>
    );
  };

  const renderScene = SceneMap({
    websiteTab: WebsiteTab,
    artTab: ArtTabRoute,
  });
  const [routes] = React.useState([
    {key: 'websiteTab', title: 'Website'},
    {key: 'artTab', title: 'Art'},
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
          tabStyle={{width: 70, padding: 0}}
          pagerStyle={{
            color: 'pink',
            marginTop: 15,
          }}
          inactiveColor={exploreTab.tabInActiveColor}
          indicatorContainerStyle={{}}
          labelStyle={{
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 19,
            textTransform: 'capitalize',
          }}
          sceneContainerStyle={{color: 'pink'}}
          activeColor={exploreTab.tabActiveColor}
          indicatorStyle={[
            {
              backgroundColor: steps.activeColor,
              height: 2,
            },
          ]}
        />
      )}
    />
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
