import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('window');

const ExerciseGrid = ({name}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        marginVertical: 1,
        flexDirection: 'row',
        height: height / 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center'}}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ExerciseGrid;
