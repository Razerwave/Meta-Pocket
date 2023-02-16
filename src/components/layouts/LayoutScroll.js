import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity, Animated } from 'react-native';
import { IconScrollTop } from '../../assets/icons';
import { useAuth } from '../../context/AuthContext';
import ButtonScroll from '../buttons/ButtonScroll';

const CONTENT_OFFSET_THRESHOLD = 10;

const LayoutScroll = ({ children, bottomGap = 0, button, onPress }) => {
  const scrollRef = useRef();
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const [visible, setVisible] = useState(false);
  const { mainOnPressEvent } = useAuth();

  const onPressTouch = () => {
    setVisible(false);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (contentVerticalOffset > CONTENT_OFFSET_THRESHOLD) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) return;
        setVisible(true);
      });
    } else if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (!finished) return;
        setVisible(false);
      });
    }
  }, [contentVerticalOffset, CONTENT_OFFSET_THRESHOLD]);

  const handleOnPress = () => {
    if (mainOnPressEvent) {
      try {
        mainOnPressEvent();
      } catch (ex) {
        console.log('Main Press Event error from Scroll Layout');
      }
    }
  };

  // console.log('fadeAnim', fadeAnim, fadeAnim !== 0, fadeAnim === 0)
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollRef}
        onScroll={event => {
          setContentVerticalOffset(event.nativeEvent.contentOffset.y);
        }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPressOut={handleOnPress}>
          {children}
          {onPress && <ButtonScroll onPress={onPress}>{button}</ButtonScroll>}
          <View style={{ height: bottomGap }} />
        </TouchableOpacity>
      </ScrollView>

      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        {visible && (
          <TouchableOpacity style={styles.scrollTop} onPress={onPressTouch}>
            <IconScrollTop />
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
};

export default LayoutScroll;

const styles = StyleSheet.create({
  scrollTop: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});
