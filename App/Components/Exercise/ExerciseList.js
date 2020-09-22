import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ExerciseGrid from './ExerciseGrid';
const {height, width} = Dimensions.get('window');
const ExerciseList = ({exercises, navigation}) => {
  return (
    <>
      <View
        style={{
          height: height / 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>Exercises</Text>
      </View>
      <ScrollView
        style={{
          flexDirection: 'column',
          marginHorizontal: 5,
          flex: 1,
        }}>
        {exercises.map(item => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ExerciseDetails',{id:item.id,item:item});
            }}
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
            <Text style={{textAlign: 'center'}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default ExerciseList;
