import {View, Text} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {useTheme} from 'styled-components';
import {Dimensions} from 'react-native';
import {primary, white} from '../constants/colors';

const CustomLineChart = ({data}) => {
  const {chart, fontColor} = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const chartWidth = windowWidth - 140;

  const ptData = [
    {value: 0, date: ''},
    {value: 30, date: ''},
    {value: 10, date: '0'},
    {value: 25, date: '0'},
    {value: 70, date: '0'},
    {value: 50, date: 'ALL (day)'},
  ];

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
          areaChart
          curved
          data={ptData}
          width={chartWidth}
          hideDataPoints
          spacing={31}
          color="#00ff83"
          thickness={2}
          startFillColor="rgba(20,105,81,0.3)"
          endFillColor="rgba(20,85,81,0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={6}
          stepHeight={31}
          height={185}
          yAxisThickness={0}
          yAxisTextStyle={{color: 'white', fontSize: 12}}
          yAxisLabelContainerStyle={{paddingRight: 10}}
          rulesThickness={1}
          rulesColor={chart.rulesColor}
          rulesType={'dashed'}
          // showVerticalLines
          // verticalLinesColor={chart.rulesColor}
          xAxisColor="lightgray"
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: 'lightgray',
            pointerStripWidth: 2,
            pointerColor: 'lightgray',
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            // activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: items => {
              return (
                <View
                  style={{
                    height: 90,
                    width: 100,
                    justifyContent: 'center',
                    // marginTop: -30,
                    // marginLeft: -40,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>
                    {items[0].date}
                  </Text>

                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 16,
                      backgroundColor: 'white',
                    }}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                      {'$' + items[0].value + '.0'}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
      </View>
    </View>
  );
};

export default CustomLineChart;
