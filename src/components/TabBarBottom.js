import { useEffect, useRef } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useTheme } from 'styled-components'

const TabBarBottom = ({ state, descriptors, navigation }) => {
  const { fontColor } = useTheme()
  return (
    <View style={[styles.tabContainer, { backgroundColor: fontColor }]}>
      {state.routes.map((route, index) => <TabButton key={index} route={route} index={index} state={state} descriptors={descriptors} navigation={navigation} />)}
    </View>
  );
}

const animate1 = { 0: { scale: .5, translateY: 8 }, .92: { translateY: -24 }, 1: { scale: 1.2, translateY: -14 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 8 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 }, }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }


// const animate1 = { 0: { scale: .5, translateY: 8 }, 1: { scale: 1.2, translateY: -14 } }
// const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 8 } }

// const circle1 = { 0: { scale: 0, translateY: 0 }, .5: { scale: 1, translateY: 0 }, .92: { translateY: -2 }, 1: { scale: 1, translateY: 0 } }
// const circle2 = { 0: { scale: 1, translateY: 0 }, 1: { scale: 0, translateY: 0 } }

const TabButton = ({ route, index, descriptors, navigation, state }) => {
  const { options } = descriptors[route.key];
  const { backgroundColor, activeTintColor, fontColor } = useTheme()

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
  const icon = options.tabBarIcon({ focused: focused, size: 25, color: focused ? fontColor : backgroundColor });
  const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

  const viewRef = useRef(null)
  const circleRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1)
      circleRef.current.animate(circle1)
      textRef.current.transitionTo({ scale: 1 })
    } else {
      viewRef.current.animate(animate2)
      circleRef.current.animate(circle2)
      textRef.current.transitionTo({ scale: 0 })
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
        duration={500}
        style={styles.container}
      >
        <View style={[styles.btn, {backgroundColor: fontColor, borderColor: fontColor}]}>
          <Animatable.View
            ref={circleRef}
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor: backgroundColor, borderRadius: 25 }}
          />
          {icon}
        </View>
        <Animatable.Text
          ref={textRef}
          style={{ fontSize: 10, color: backgroundColor, textAlign: 'center' }}
        >
          {label}
        </Animatable.Text>
        {/* <Text style={{ color: focused ? activeTintColor : fontColor }}>
          {label}
        </Text> */}
      </Animatable.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 70,
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    borderRadius: 16,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    // borderColor: 'white',
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default TabBarBottom