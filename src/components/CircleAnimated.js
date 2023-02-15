import { useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Animated, Easing } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { gray100, magenta, neutral100, primary, purple100 } from '../constants/colors';

const CircleAnimated = ({ children, size = 186 }) => {
  const [spin, setSpin] = useState(false)

  return (
    <TouchableOpacity onPress={() => setSpin(v => !v)}>
      <View>
        <View style={{ height: size, width: size, alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </View>
        <View style={{ position: 'absolute' }}>
          <SpinningView toValue={-360} durationMs={1500} spin={spin}>
            <CircleView stroke={magenta} percentage={30} rotation={-90} size={size} />
          </SpinningView>
        </View>
        <View style={{ position: 'absolute' }}>
          <SpinningView toValue={360} durationMs={1500} spin={spin}>
            <CircleView stroke={gray100} percentage={10} rotation={18} size={size} />
          </SpinningView>
        </View>
        <View style={{ position: 'absolute' }}>
          <SpinningView toValue={-360} durationMs={1500} spin={spin}>
            <CircleView stroke={purple100} percentage={20} rotation={54} size={size} />
          </SpinningView>
        </View>
        <View style={{ position: 'absolute' }}>
          <SpinningView toValue={360} durationMs={1500} spin={spin}>
            <CircleView stroke={primary} percentage={40} rotation={126} size={size} />
          </SpinningView>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const CircleView = ({
  stroke = "blue",
  rotation = 0,
  size = 100,
  strokeWidth = 10,
  percentage = 100,
}) => {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // const progressAnimation = useRef(new Animated.Value(0)).current;
  // const progressRef = useRef(null);

  // const animation = (toValue) => {
  //   return Animated.timing(progressAnimation, {
  //     toValue,
  //     duration: 250,
  //     useNativeDriver: true
  //   }).start()
  // }

  // useEffect(() => {
  //   animation(percentage)
  // }, [percentage])

  // useEffect(() => {
  //   progressAnimation.addListener((value) => {
  //     const strokeDashoffset = circumference - (circumference * value.value) / 100

  //     if (progressRef?.current) {
  //       progressRef.current.setNativeProps({
  //         strokeDashoffset
  //       })
  //     }
  //   }, [percentage]);
  // })

  return (
    <Svg width={size} height={size}>
      <G rotation={rotation} origin={center}>
        <Circle
          // ref={progressRef}
          fill="none"
          stroke={stroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * percentage) / 100}
        />
      </G>
    </Svg>
  )
}

const SpinningView = ({
  durationMs = 1000,
  children,
  toValue = 360,
  spin = false,
}) => {
  const rotationDegree = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const startRotationAnimation = (durationMs, rotationDegree) => {
      // Animated.loop(
      Animated.timing(
        rotationDegree,
        {
          toValue: toValue,
          duration: durationMs,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      ).start(() => {
        Animated.timing(rotationDegree).reset()
      })
      // ).start()
    }

    startRotationAnimation(durationMs, rotationDegree)
  }, [spin])

  return (
    <Animated.View
      style={[{
        transform: [{
          rotateZ: rotationDegree.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
          })
        }]
      }]}
    >
      {children}
    </Animated.View>
  )
}

export default CircleAnimated