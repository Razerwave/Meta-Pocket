import { TabView, TabBar } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';

const CustomTabs = ({
  tabIndex = 0,
  onTabChange = () => { },
  tabRoutes = [],
  renderScene = () => { },
  renderTabBar,
}) => {
  const { backgroundColor, exploreTab } = useTheme();
  const layout = useWindowDimensions();

  return (
    <TabView
      navigationState={{ index: tabIndex, routes: tabRoutes }}
      renderScene={renderScene}
      onIndexChange={onTabChange}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => renderTabBar ? renderTabBar(props) : (
        <TabBar
          {...props}
          style={[{ backgroundColor: backgroundColor }]}
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
          sceneContainerStyle={{ color: 'pink' }}
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

export default CustomTabs