import { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View, Animated, Easing } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const CircleAnimated = ({ children, size = 186, data = [] }) => {
  const [spin, setSpin] = useState(false)

  const percentages = data?.map(i => i.percentage)

  return (
    <TouchableOpacity onPress={() => setSpin(v => !v)}>
      <View>
        <View style={{ height: size, width: size, alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </View>
        {data?.map(({ color, percentage }, index) => {
          return (
            <View key={index} style={{ position: 'absolute' }}>
              <SpinningView toValue={index % 2 === 0 ? -360 : 360} durationMs={1500} spin={spin}>
                <CircleView
                  stroke={color}
                  percentage={percentage}
                  rotation={3.6 * percentages.slice(0, index).reduce((partialSum, a) => partialSum + a, 0) - 90}
                  size={size}
                />
              </SpinningView>
            </View>
          )
        })}
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