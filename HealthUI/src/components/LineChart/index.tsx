import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Vector from '../../assets/vector.svg';
import styles from './styles';

const mockData = [60, 70, 40, 10, 40, 70];

const Chart = () => (
  <View style={styles.root}>
    <View style={styles.illusion}>
      <Vector width={Dimensions.get('window').width + 10} height={140} />
    </View>
    <LineChart
      data={{
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            data: mockData,
          },
        ],
      }}
      width={Dimensions.get('window').width + 160}
      height={200}
      chartConfig={{
        backgroundColor: 'transparent',
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        fillShadowGradientFromOpacity: 0,
        fillShadowGradientToOpacity: 0,
        decimalPlaces: 0,
        color: () => '#5142AB', // line color
        propsForDots: { // data point
          r: '9',
          strokeWidth: '5',
          stroke: '#ffffff',
          fill: '#2FBAF4',
        },
        strokeWidth: 9,
      }}
      style={styles.chart}
      bezier
      fromZero
      withInnerLines={false}
      withOuterLines={false}
      withVerticalLines={false}
      withHorizontalLines={false}
      withVerticalLabels={false}
      withHorizontalLabels={false}
      hidePointsAtIndex={[0, 1, 2, 3, 5]}
      renderDotContent={({ x, y, index, indexData }) => (
        <View key={index}>
          <View
            style={{
              ...styles.pointBox,
              top: y - 55,
              left: x - 40,
            }}>
            <Text style={styles.pointBoxContent}>-540 Kcal</Text>
          </View>

          {/* <View
            style={{
              position: 'absolute',
              left: x - 10,
              top: y,
              bottom: 0,
              width: 20,
              height: 180 - y,
              paddingTop: 180 - y,
              backgroundColor: '#2FBAF4',
              zIndex: -1,
            }}> */}
          <View
            style={{
              ...styles.xLabelBox,
              top: 180,
              left: x - 40,
            }}>
            <Text style={styles.xLabel}>8:20 Am</Text>
          </View>
          {/* </View> */}
        </View>
      )}
    />
  </View>
);

export default Chart;
