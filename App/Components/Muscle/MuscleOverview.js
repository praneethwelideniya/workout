import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import MuscleGrid from './MuscleGrid';
import {SvgCssUri} from 'react-native-svg';
const {height, width} = Dimensions.get('window');
import Data from '../../data';

const MuscleOverview = ({navigation}) => {
  _onPress = (data, name) => {
    navigation.navigate('Category', {
      id: Data[data][0].id,
      img: Data[data][0].img,
      header: 'Muscle - ',
      name: name,
      data: data,
      query: 'muscles=',
      isMuscle: true,
    });
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: height / 3,
        }}>
        <MuscleGrid
          header="Front"
          uri="https://wger.de/static/images/muscles/muscular_system_front.svg"
          onPress={() => {
            _onPress('front_muscle', 'Front');
          }}
        />
        <MuscleGrid
          header="Back"
          uri="https://wger.de/static/images/muscles/muscular_system_back.svg"
          onPress={() => {
            _onPress('back_muscle', 'Back');
          }}
        />
      </View>
    </View>
  );
};

export default MuscleOverview;
