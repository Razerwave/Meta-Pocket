import {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import Animated, {FadeInUp, CurvedTransition} from 'react-native-reanimated';

const CustomSelect = ({value, data, onChange}) => {
  const [selectedItem, setSelectedItem] = useState({});
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {setMainPressEvent} = useAuth();

  // const animation = useSharedValue({opacity: 0});

  // const animationStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: withTiming(animation.value.opacity, {duration: 300}),
  //   };
  // });

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        handleOnChange(item);
        setDropdownVisible(false);
      }}
      key={index}>
      <View style={{padding: 10}}>
        <Text>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );

  const findSelectedItem = selected => {
    try {
      const selectedItem = data.find(item => item.value === selected);
      if (selectedItem) {
        return selectedItem;
      }

      return {};
    } catch (ex) {
      console.log(ex);
      return {};
    }
  };

  const handleOnChange = item => {
    if (onChange) {
      onChange(item);
    }
    setSelectedItem(item);
  };

  useEffect(() => {
    if (value) {
      setSelectedItem(findSelectedItem(value));
    } else {
      setSelectedItem({});
    }
  }, [value]);

  useEffect(() => {
    if (dropdownVisible) {
      setMainPressEvent({event: () => setDropdownVisible(false)});
    } else {
    }
  }, [dropdownVisible]);

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          right: 0,
          top: '-50%',
          backgroundColor: dropdownVisible ? 'white' : 'transparent',
          borderWidth: 1,
          borderColor: 'grey',
        }}
        layout={CurvedTransition.duration(100)}>
        <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
          <View style={{padding: 10}}>
            <Text>
              {dropdownVisible
                ? selectedItem.label
                : selectedItem.selectedLabel
                ? selectedItem.selectedLabel
                : selectedItem.label}
            </Text>
          </View>
        </TouchableOpacity>
        {dropdownVisible && (
          <Animated.View entering={FadeInUp}>
            {data.map((item, index) => {
              if (item.value === selectedItem.value) {
                return null;
              }
              return renderItem({item, index});
            })}
          </Animated.View>
        )}
      </Animated.View>
    </View>
  );
};

export default CustomSelect;
