import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {HomeScreen, Stack, StyledText} from '../../components';
import {useTheme} from 'styled-components';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {ROUTES} from '../../constants';
import {useAuth} from '../../context/AuthContext';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {links, Artlinks} from '../../constants/ListData';
import ArrowButton from '../../components/buttons/ArrowButton';
// const ExploreListScreen = ({navigation, route}) => {
//   const {fontColor, primaryColor} = useTheme();
//   const data = route.params.data;
//   const title = route.params.title;
//   const favorite = route.params.favorite;
//   const setFavorite = route.params.setFavorite;
//   // const {favorite, setFavorite} = useAuth();
//   const WEB_LINK = 'https://www.youtube.com/';
//   const [tab, setTab] = useState(0);

//   return (
//     <HomeScreen>
//       <Stack spacing={20} padding={16}>
//         <Stack direction="row" style={{justifyContent: 'space-between'}}>
//           {title.map((sceenTitle, key) => {
//             const isActive = tab === key;
//             return (
//               <Stack
//                 key={key}
//                 style={[
//                   {
//                     paddingHorizontal: 12,
//                   },
//                   isActive && {
//                     borderBottomWidth: 3,
//                     borderBottomColor: 'white',
//                   },
//                 ]}>
//                 <TouchableOpacity
//                   key={sceenTitle.id}
//                   style={{}}
//                   onPress={() => setTab(key)}>
//                   <StyledText
//                     style={[
//                       {fontWeight: 'bold'},
//                       isActive ? {color: 'white'} : {color: '#777777'},
//                     ]}>
//                     {sceenTitle.title}
//                   </StyledText>
//                 </TouchableOpacity>
//               </Stack>
//             );
//           })}
//         </Stack>
//         {data.map((index, key) => (
//           <View key={key}>
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate(ROUTES.EXPLORE.WEB, {uri: WEB_LINK})
//               }
//               fontColor={fontColor}
//               style={{
//                 flexDirection: 'row',
//                 gap: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <View
//                 style={{
//                   borderColor: fontColor,
//                 }}>
//                 <Image
//                   source={require('../../assets/icons/Ellipse93.png')}
//                   style={{width: 14, height: 14}}
//                 />
//               </View>
//               <Stack spacing={20} direction="row" style={{flex: 1}}>
//                 <Stack style={{flex: 1}}>
//                   <Stack style={{borderColor: 'gray'}}>
//                     <StyledText
//                       style={{fontWeight: 'bold', paddingHorizontal: 8}}>
//                       {index.Subject}
//                     </StyledText>
//                   </Stack>

//                   <Stack>
//                     <StyledText
//                       style={{
//                         borderColor: 'gray',
//                         paddingHorizontal: 8,
//                         color: '#777777',
//                       }}>
//                       {index.Description}
//                     </StyledText>
//                   </Stack>
//                 </Stack>
//                 <View>
//                   <Pressable>
//                     {index.fav == true ? (
//                       <Image
//                         source={require('../../assets/icons/Vector.png')}
//                         style={{width: 14, height: 14}}
//                       />
//                     ) : (
//                       <Image
//                         source={require('../../assets/icons/favorite.png')}
//                         style={{width: 14, height: 14}}
//                       />
//                     )}
//                   </Pressable>
//                 </View>
//               </Stack>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </Stack>
//     </HomeScreen>
//   );
// };

const TabViewExample = ({navigation, route}) => {
  const layout = useWindowDimensions();
  const {logout, isDarkTheme, toggleTheme} = useAuth();
  const [index, setIndex] = React.useState(route.params.tabIndex || 0);

  const {backgroundColor, bottomTab, fontColor, steps, fonts} = useTheme();
  const WEB_LINK = 'https://www.youtube.com/';

  const WebsiteTab = ({navigation, route}) => {
    return (
      <HomeScreen>
        <Stack spacing={20} padding={16}>
          {links.map((index, key) => (
            <Stack key={key} style={{gap: 20}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(ROUTES.EXPLORE.WEB, {uri: index.url})
                }
                style={{
                  flexDirection: 'row',
                  gap: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{}}>
                  <Image
                    source={require('../../assets/icons/Ellipse93.png')}
                    style={{width: 14, height: 14}}
                  />
                </View>
                <Stack spacing={20} direction="row" style={{flex: 1}}>
                  <Stack style={{flex: 1}}>
                    <Stack style={{borderColor: 'gray'}}>
                      <StyledText
                        style={{fontWeight: 'bold', paddingHorizontal: 8}}>
                        {index.Subject}
                      </StyledText>
                    </Stack>

                    <Stack>
                      <StyledText
                        style={{
                          borderColor: 'gray',
                          paddingHorizontal: 8,
                          color: '#777777',
                        }}>
                        {index.url}
                      </StyledText>
                    </Stack>
                  </Stack>
                  <View>
                    <Pressable>
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
                    </Pressable>
                  </View>
                </Stack>
              </TouchableOpacity>
            </Stack>
          ))}
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            <ArrowButton />
          </View>
        </Stack>
      </HomeScreen>
    );
  };
  const ArtTabRoute = () => {
    return (
      <HomeScreen>
        <Stack spacing={20} padding={16}>
          {Artlinks.map((index, key) => (
            <Stack key={key} style={{gap: 20}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(ROUTES.EXPLORE.WEB, {uri: index.url})
                }
                style={{
                  flexDirection: 'row',
                  gap: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{}}>
                  <Image
                    source={require('../../assets/icons/Ellipse95.png')}
                    style={{width: 14, height: 14}}
                  />
                </View>
                <Stack spacing={20} direction="row" style={{flex: 1}}>
                  <Stack style={{flex: 1}}>
                    <Stack style={{borderColor: 'gray'}}>
                      <StyledText
                        style={{fontWeight: 'bold', paddingHorizontal: 8}}>
                        {index.name}
                      </StyledText>
                    </Stack>

                    <Stack>
                      <StyledText
                        style={{
                          borderColor: 'gray',
                          paddingHorizontal: 8,
                          color: '#777777',
                        }}>
                        {index.author}
                      </StyledText>
                    </Stack>
                  </Stack>
                  <View>
                    <Pressable>
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
                    </Pressable>
                  </View>
                </Stack>
              </TouchableOpacity>
            </Stack>
          ))}
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            <ArrowButton />
          </View>
        </Stack>
      </HomeScreen>
    );
  };

  const renderScene = SceneMap({
    websiteTab: WebsiteTab,
    artTab: ArtTabRoute,
  });
  const [routes, setRoutes] = React.useState([
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
          scrollEnabled
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
            fontWeight: 600,
            textTransform: 'capitalize',
          }}
          sceneContainerStyle={{color: 'pink'}}
          activeColor={steps.activeColor}
          indicatorStyle={[
            {
              backgroundColor: steps.activeColor,
              height: 3,
            },
          ]}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({
  scrollTopButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
export default TabViewExample;
