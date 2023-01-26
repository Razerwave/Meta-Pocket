import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'

const TabBarBottom = ({ state, descriptors, navigation }) => {
  const { backgroundColor, activeTintColor, fontColor } = useTheme()
  // const backgroundColor = theme === 'dark' ? 'white' : 'lightgray'
  return (
    <View style={{
      position: 'absolute',
      bottom: 0,
      left: 10,
      right: 10,
      bottom: 10,
      elevation: 0,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingVertical: 5,
      borderRadius: 50,
      backgroundColor,
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;
        const icon = options.tabBarIcon({ focused: isFocused, size: 25, color: isFocused ? activeTintColor : fontColor });

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
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

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center' }}
          >
            {icon}
            <Text style={{ color: isFocused ? activeTintColor : fontColor }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBarBottom