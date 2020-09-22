import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Muscles from '../Muscle/Muscles';
const {height} = Dimensions.get('window');
const MuscleHeader = ({front, back}) => {
  return (
    <View style={styles.container}>
      <View style={styles.muscle}>
        <Muscles
          uri="https://wger.de/static/images/muscles/muscular_system_front.svg"
          muscleUri={front}
        />
      </View>
      <View style={styles.muscle}>
        <Muscles
          uri="https://wger.de/static/images/muscles/muscular_system_back.svg"
          muscleUri={back}
        />
      </View>
    </View>
  );
};

export default MuscleHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: height / 3,
    paddingVertical: height / 80,
    borderBottomWidth: 1,
  },
  muscle: {flex: 1, flexDirection: 'column'},
});
