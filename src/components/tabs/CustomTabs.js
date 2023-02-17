import { TabView, TabBar } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';

const CustomTabs = ({
  tabIndex = 0,
  onTabChange = () => { },
  tabRoutes = [],
  renderScene = () => { },
  tabColors,
}) => {
  const { backgroundColor, exploreTab } = useTheme();
  const layout = useWindowDimensions();

  const tabColorObj = tabColors || exploreTab
  return (
    <TabView
      navigationState={{ index: tabIndex, routes: tabRoutes }}
      renderScene={renderScene}
      onIndexChange={onTabChange}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={[{ backgroundColor: backgroundColor, paddingHorizontal: 16 }]}
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
          inactiveColor={tabColorObj.tabInActiveColor}
          indicatorContainerStyle={{}}
          labelStyle={{
            fontSize: 16,
            fontWeight: 400,
            textTransform: 'none',
          }}
          sceneContainerStyle={{ color: 'pink' }}
          activeColor={tabColorObj.tabActiveColor}
          indicatorStyle={[
            {
              backgroundColor: tabColorObj.tabActiveColor,
              height: 2,
              marginHorizontal: 16
            },
          ]}
        />
      )}
    />
  );
};

export default CustomTabs