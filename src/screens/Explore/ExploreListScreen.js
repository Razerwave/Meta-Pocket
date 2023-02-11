import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {CardBox, HomeScreen, Screen, Stack, StyledText} from '../../components';
import {useTheme} from 'styled-components';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {ROUTES} from '../../constants';
import {useAuth} from '../../context/AuthContext';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {links, testData, items, Tabs} from '../../constants/ListData';
import {useScrollToTop} from '@react-navigation/native';
// const ExploreListScreen = ({navigation, route}) => {
//   const {fontColor, activeTintColor} = useTheme();
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

const AllTabRoute = ({navigation, route}) => {
  const WEB_LINK = 'https://www.youtube.com/';
  const {fontColor} = useTheme();

  const ListView = () => {
    console.log('clicked');
  };

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
          <TouchableOpacity>
            <Stack
              style={{
                width: 34,
                height: 34,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 60,
                backgroundColor: '#236BFE',
              }}>
              <Text style={{color: 'white'}}>
                <IonIcon name="arrow-up-outline" size={25} color={fontColor} />
              </Text>
            </Stack>
          </TouchableOpacity>
        </View>
      </Stack>
    </HomeScreen>
  );
};
const FavoriteTabRoute = () => <HomeScreen />;
const WebsiteTabRoute = () => <HomeScreen />;
const ItemTabRoute = () => <HomeScreen />;
const ArtTabRoute = () => <HomeScreen />;
const ArticleTab = () => <HomeScreen />;

const renderScene = SceneMap({
  alltab: AllTabRoute,
  favoriteTab: FavoriteTabRoute,
  websiteTab: WebsiteTabRoute,
  itemTab: ItemTabRoute,
  artTab: ArtTabRoute,
  articleTab: ArticleTab,
});

const TabViewExample = () => {
  const layout = useWindowDimensions();
  const {logout, isDarkTheme, toggleTheme} = useAuth();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'alltab', title: 'All'},
    {key: 'favoriteTab', title: 'Favorite'},
    {key: 'websiteTab', title: 'Website'},
    {key: 'itemTab', title: 'Item'},
    {key: 'artTab', title: 'Art'},
    {key: 'articleTab', title: 'Article'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width - 20}}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={[
            {backgroundColor: '#F7F8F9'},
            isDarkTheme && {backgroundColor: '#1C1C28'},
          ]}
          contentContainerStyle={{
            backgroundColor: `${props => props.theme.backgroundColor}`,
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
          inactiveColor={'#777777'}
          indicatorContainerStyle={{
            backgroundColor: `${props => props.theme.backgroundColor}`,
            color: 'pink',
            fontSize: 10,
          }}
          labelStyle={{fontSize: 16, fontWeight: 400}}
          sceneContainerStyle={{color: 'pink'}}
          activeColor={'#FFFFFF'}
          indicatorStyle={[
            {backgroundColor: '#1C1C28'},
            isDarkTheme && {backgroundColor: '#F7F8F9'},
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
