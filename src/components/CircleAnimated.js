import { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View, Animated, Easing } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { IconDottRec } from '../assets/icons';
import { neutral100 } from '../constants/colors';
import { useAuth } from '../context/AuthContext';
import { currency } from '../utils/formats';
import Stack from './Stack';
import BodyHeading from './texts/BodyHeading';
import BodyText from './texts/BodyText';

const CircleAnimated = ({ size = 186, data = [] }) => {
  const { i18n } = useAuth()
  const [spin, setSpin] = useState(false)

  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0)
  const percentages = data?.map(i => i.amount / totalAmount * 100)

  return (
    <Stack>
      <Stack alignItems="center" marginBottom={25}>
        <TouchableOpacity onPress={() => setSpin(v => !v)}>
          <View>
            <View style={{ height: size, width: size, alignItems: 'center', justifyContent: 'center' }}>
              <BodyText type={5}>{i18n.totalValue}</BodyText>
              <BodyHeading type={4}>${currency(totalAmount)}</BodyHeading>
            </View>
            {data?.map(({ color, amount }, index) => {
              const percentage = amount / totalAmount * 100
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
      </Stack>
      <Stack spacing={10}>
        {data?.map((item, index) => <LisItem key={index} {...item} percentage={percentages[index]} />)}
      </Stack>
    </Stack>
  )
}

const LisItem = ({ color, coin, percentage = 0, amount }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={10} marginHorizontal={33}>
      <IconDottRec color={color} />
      <BodyText type={3}>{coin}</BodyText>
      <Stack style={{ flex: 1, alignItems: 'flex-end' }}>
        <BodyText type={3} style={{ color: neutral100 }}>
          {percentage.toFixed()}
          <BodyText type={5} style={{ color: neutral100 }}> %</BodyText>
        </BodyText>
      </Stack>
      <BodyText type={3} style={{ marginLeft: 10, alignItems: 'flex-end' }}>
        ${currency(amount)}
      </BodyText>
    </Stack>
  );
};

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