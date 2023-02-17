import {View, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useTheme} from 'styled-components';
import {Dimensions} from 'react-native';
import {primary} from '../constants/colors';

const CustomLineChartKit = ({data, showHorizontalLabel}) => {
  const {chart, fontColor} = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const chartWidth = windowWidth - 72 + (showHorizontalLabel ? 0 : 30);

  const chartData = {
    datasets: [
      {
        data: data.data,
        color: () => `${primary}`, // optional
        strokeWidth: 2, // optional
      },
    ],
    labels: data.labels,
    legend: data.legend,
  };

  const chartConfig = {
    fillShadowGradientFrom: primary,
    fillShadowGradientTo: primary,
    fillShadowGradientFromOpacity: 0.3,
    fillShadowGradientTo: 1,
    fillShadowGradientFromOffset: 0.5,
    color: () => `${chart.rulesColor}`,
    strokeWidth: 2,
    useShadowColorFromDataset: true, // optional
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    propsForLabels: {
      fill: fontColor,
    },
    propsForVerticalLabels: {
      fill: fontColor,
    },
    propsForHorizontalLabels: {
      fill: fontColor,
    },
  };

  return (
    <View
      style={{
        width: '100%',
        padding: 20,
      }}>
      <View
        style={{
          padding: 16,
          borderRadius: 10,
          backgroundColor: chart.backgroundColor,
        }}>
        <LineChart
          data={chartData}
          width={chartWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{borderRadius: 10, marginLeft: showHorizontalLabel ? 0 : -40}}
          withHorizontalLabels={showHorizontalLabel ? true : false}
        />
      </View>
    </View>
  );
};

export default CustomLineChartKit;
