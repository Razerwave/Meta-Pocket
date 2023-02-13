import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useAuth} from '../../context/AuthContext';
import {
  CardBox,
  HomeScreen,
  LayoutScreen,
  LayoutScroll,
  Screen,
  Stack,
  StyledText,
} from '../../components';
import {useTheme} from 'styled-components';
import {ROUTES} from '../../constants';
import {Dappdata} from '../../constants/ListData';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ArrowButton from '../../components/buttons/ArrowButton';
import {gray5, gray} from '../../constants/colors';
import {IconDappArrow} from '../../assets/icons';

const DappScreen = ({navigation}) => {
  const {fontColor, activeTintColor, backgroundColor, fonts, steps} =
    useTheme();
  const WEB_LINK = 'https://www.youtube.com/';
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setData(Dappdata);
    };

    getData();
  }, []);
  const layout = useWindowDimensions();
  const {logout, isDarkTheme, toggleTheme} = useAuth();

  const AllTab = () => {
    return (
      <LayoutScreen>
        <LayoutScroll>
          <Stack
            padding={30}
            style={{borderTopWidth: 1, borderColor: '#313545'}}>
            <Stack
              spacing={20}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
              }}>
              {data.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    style={{
                      alignItems: 'center',
                      height: 'auto',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(ROUTES.BUY.BUY_SCREEN, {
                          uri: WEB_LINK,
                          item: item,
                        })
                      }
                      style={{
                        flex: 1,
                        height: 102,
                        width: 150,
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
                            marginBottom: 10,
                            marginRight: 7,
                          }}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate(ROUTES.EXPLORE.LIST_SCREEN, {
                                data: items,
                                key: key,
                                title: title,
                                tabIndex: index,
                              })
                            }>
                            <IconDappArrow />
                          </TouchableOpacity>
                        </TouchableOpacity>
                        <Stack style={{marginBottom: 20, marginLeft: 20}}>
                          <Image source={item.image} />
                        </Stack>
                      </Stack>
                    </TouchableOpacity>

                    <Stack style={{alignSelf: 'flex-start'}}>
                      <StyledText
                        style={{
                          marginTop: 10,
                          marginBottom: 6,
                          fontSize: 12,
                          lineHeight: 14,
                          color: fontColor,
                        }}>
                        {item.title}
                      </StyledText>
                      <StyledText style={{color: gray, fontSize: 10}}>
                        {item.description}
                      </StyledText>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </LayoutScroll>
      </LayoutScreen>
    );
  };
  const PopularTab = () => {
    return (
      <LayoutScreen>
        <LayoutScroll>
          <Stack
            spacing={20}
            padding={30}
            style={{
              borderTopWidth: 1,
              borderColor: '#313545',
            }}>
            <Stack
              spacing={20}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
              }}>
              {data.map((item, index) => {
                if (index < 8) {
                  return (
                    item.type === 'Popular' && (
                      <Stack key={index}>
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
                              <TouchableOpacity
                                onPress={() =>
                                  navigation.navigate(
                                    ROUTES.EXPLORE.LIST_SCREEN,
                                    {
                                      data: items,
                                      key: key,
                                      title: title,
                                      tabIndex: index,
                                    },
                                  )
                                }>
                                <IconDappArrow />
                              </TouchableOpacity>
                            </TouchableOpacity>
                            <Stack style={{marginBottom: 20, marginLeft: 20}}>
                              <Image source={item.image} />
                            </Stack>
                          </Stack>
                        </TouchableOpacity>

                        <Stack style={{alignSelf: 'flex-start'}}>
                          <StyledText
                            style={{
                              marginTop: 10,
                              marginBottom: 6,
                              color: fontColor,
                            }}>
                            {item.title}
                          </StyledText>
                          <StyledText style={{color: gray}}>
                            {item.description}
                          </StyledText>
                        </Stack>
                      </Stack>
                    )
                  );
                }
              })}
            </Stack>
          </Stack>
        </LayoutScroll>
      </LayoutScreen>
    );
  };

  const MiningTab = () => {
    return (
      <LayoutScreen>
        <LayoutScroll>
          <Stack
            padding={30}
            style={{borderTopWidth: 1, borderColor: '#313545'}}>
            <Stack
              spacing={20}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
              }}>
              {data.map((item, index) => {
                if (index < 6) {
                  return (
                    item.type === 'Mining' && (
                      <Stack key={index} style={{}}>
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
                              <TouchableOpacity
                                onPress={() =>
                                  navigation.navigate(
                                    ROUTES.EXPLORE.LIST_SCREEN,
                                    {
                                      data: items,
                                      key: key,
                                      title: title,
                                      tabIndex: index,
                                    },
                                  )
                                }>
                                <IconDappArrow />
                              </TouchableOpacity>
                            </TouchableOpacity>
                            <Stack style={{marginBottom: 20, marginLeft: 20}}>
                              <Image source={item.image} />
                            </Stack>
                          </Stack>
                        </TouchableOpacity>

                        <Stack style={{alignSelf: 'flex-start'}}>
                          <StyledText
                            style={{
                              marginTop: 10,
                              marginBottom: 6,
                              color: fontColor,
                            }}>
                            {item.title}
                          </StyledText>
                          <StyledText style={{color: gray}}>
                            {item.description}
                          </StyledText>
                        </Stack>
                      </Stack>
                    )
                  );
                }
              })}
            </Stack>
          </Stack>
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
  const [routes, setRoutes] = React.useState([
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
          tabStyle={{fontSize: 10}}
          pagerStyle={{
            color: 'pink',
            marginTop: 15,
          }}
          inactiveColor={fonts.subTitleColor}
          indicatorContainerStyle={{}}
          labelStyle={{
            fontSize: 16,
            fontWeight: 400,
            textTransform: 'capitalize',
          }}
          sceneContainerStyle={{color: 'pink'}}
          activeColor={steps.activeColor}
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

export default DappScreen;
