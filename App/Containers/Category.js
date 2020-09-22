import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
const {height, width} = Dimensions.get('window');
import {restClient} from '../Services/RestClient';
import Data from '../data';
import {ScrollView} from 'react-native-gesture-handler';
import ExerciseList from '../Components/Exercise/ExerciseList';
import CategoryHeader from '../Components/CategoryHeader';

const Category = ({route, navigation}) => {
  const [exercises, setExercises] = useState([]);
  const [selected, setSelected] = useState({
    id: route.params.id,
    img: route.params.img,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExercises() {
      await restClient
        .get('' + route.params.query + '' + selected.id)
        .then(res => {
          setExercises(res.results);
        });
      setLoading(false);
    }
    setLoading(true);
    setExercises([]);
    fetchExercises();
  }, [selected]);

  return (
    <>
      {loading ? (
        <ActivityIndicator
          style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
          size={width / 4}
          color="orange"
        />
      ) : null}
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          opacity: loading ? 0.5 : 1,
        }}
        pointerEvents={loading ? 'none' : null}>
        <CategoryHeader
          list={Data[route.params.data]}
          selected={selected}
          onPress={(parm1, parm2) => {
            setSelected(parm1);
            if (!route.params.isMuscle) {
              navigation.setParams(parm2);
            }
          }}
          isMuscle={route.params.isMuscle}
          data={route.params.data}
        />
        <ExerciseList exercises={exercises} navigation={navigation} />
      </View>
    </>
  );
};

export default Category;
