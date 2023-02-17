import { useEffect, useRef } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useTheme } from 'styled-components'
import { fontBody } from '../constants/fonts';

const TabBarBottom = ({ state, descriptors, navigation }) => {
  const { bottomTab: { bgColor } } = useTheme()
  return (
    <View style={[styles.tabContainer, { backgroundColor: bgColor }]}>
      {state.routes.map((route, index) => <TabButton key={index} route={route} index={index} state={state} descriptors={descriptors} navigation={navigation} />)}
    </View>
  );
}

const animate1 = { 0: { scale: .5, translateY: 0 }, 1: { scale: 1.2, translateY: -10 } }
const animate2 = { 0: { scale: 1.2, translateY: -10 }, 1: { scale: 1, translateY: 0 } }

const circle1 = { 0: { scale: 0, translateY: 0 }, 0.6: { scale: 1, translateY: -10 }, 1: { scale: 1, translateY: 0 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }


// const animate1 = { 0: { scale: .5, translateY: 8 }, 1: { scale: 1.2, translateY: -14 } }
// const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 8 } }

// const circle1 = { 0: { scale: 0, translateY: 0 }, .5: { scale: 1, translateY: 0 }, .92: { translateY: -2 }, 1: { scale: 1, translateY: 0 } }
// const circle2 = { 0: { scale: 1, translateY: 0 }, 1: { scale: 0, translateY: 0 } }

const TabButton = ({ route, index, descriptors, navigation, state }) => {
  const { options } = descriptors[route.key];
  const { bottomTab: { bgColor, inactiveColor, activeColor, activeIconColor, activeTextColor } } = useTheme()

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!focused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const focused = state.index === index;
  const icon = options.tabBarIcon({ focused: focused, size: 25, color: focused ? activeIconColor : inactiveColor });
  const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

  const viewRef = useRef(null)
  const circleRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1)
      circleRef.current.animate(circle1)
      // textRef.current.transitionTo({ scale: 1 })
    } else {
      viewRef.current.animate(animate2)
      circleRef.current.animate(circle2)
      // textRef.current.transitionTo({ scale: 0 })
    }
  }, [focused])

  return (
    <TouchableOpacity
      // accessibilityRole="button"
      // accessibilityState={focused ? { selected: true } : {}}
      // accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.containerY}
      >
        <View style={[styles.btn, { backgroundColor: bgColor, borderColor: bgColor }]}>
          <Animatable.View
            ref={circleRef}
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor: activeColor, borderRadius: 25 }}
          />
          {icon}
        </View>
      </Animatable.View>
      <Animatable.Text
        ref={textRef}
        style={[styles.label, { color: focused ? activeTextColor : inactiveColor, fontWeight: focused ? 'bold' : 'normal' }]}
      >
        {label}
      </Animatable.Text>
      {/* <Text style={{ color: focused ? activeTintColor : fontColor }}>
          {label}
        </Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 99,
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 0,
    // borderRadius: 0,
    paddingHorizontal: 40,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  containerY: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 10,
    // borderColor: 'white',
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: fontBody,
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
  }
})

export default TabBarBottom