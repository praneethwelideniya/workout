import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Muscles from '../Components/Muscle/Muscles';
const {height, width} = Dimensions.get('window');
import {CheckBox} from 'react-native-elements';
import {restClient} from '../Services/RestClient';
import Data from '../data';
import ExerciseList from '../Components/Exercise/ExerciseList';
import {ScrollView} from 'react-native-gesture-handler';

const Muscle = ({route}) => {
  const [exercises, setExercises] = useState([]);

  const [selected, setSelected] = useState({
    id: Data.muscle[route.params.type].data[0].id,
    index: 0,
    muscleUri: Data.muscle[route.params.type].data[0].uri,
  });

  useEffect(() => {
    async function fetchExercises() {
      await restClient.get('muscles=' + selected.id).then(res => {
        setExercises(res.results);
      });
    }
    setExercises([]);
    fetchExercises();
  }, [selected]);
  _renderMuscles = (item, index) => (
    <CheckBox
      center
      title={item.name}
      checked={index == selected.index ? true : false}
      containerStyle={{
        height: height / 24,
        marginVertical: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: index == selected.index ? 'gray' : 'white',
      }}
      textStyle={{fontSize: height / 90}}
      onPress={() => {
        setSelected({index: index, muscleUri: item.uri, id: item.id});
      }}
    />
  );
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          backgroundColor: '#e3f1f1',
          flexDirection: route.params.type == 'front' ? 'row' : 'row-reverse',
          height: height / 2.8,
          paddingTop: 5,
        }}>
        <View style={{flex: 2.2}}>
          <Muscles uri={route.params.uri} muscleUri={selected.muscleUri} />
        </View>
        <View style={{flex: 3, justifyContent: 'space-evenly'}}>
          {Data.muscle[route.params.type].data.map((item, index) =>
            _renderMuscles(item, index),
          )}
        </View>
      </View>
      <ExerciseList exercises={exercises} />
    </View>
  );
};

export default Muscle;
