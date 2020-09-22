import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import ExerciseImage from '../Components/Exercise/ExerciseImage';
import ExerciseDescription from '../Components/Exercise/ExerciseDescription';
import ExerciseMenu from '../Components/Exercise/ExerciseMenu';
import MuscleHeader from '../Components/Exercise/MuscleHeader';
import ExerciseEquipments from '../Components/Exercise/ExerciseEquipments';
import Data from '../data';
import {restClient} from '../Services/RestClient';
const {height, width} = Dimensions.get('window');

const ExerciseDetails = ({route, navigation}) => {
  const [exercise, setExercise] = useState({
    name: '',
    category: '',
    description: '',
    front: [],
    back: [],
    equipments: [],
  });

  const [images, setImages] = useState([]);
  useEffect(() => {
    async function setProperties() {
      const eq = await Data.equipments.filter(eq =>
        route.params.item.equipment.includes(eq.id),
      );

      const cat = await Data.exercise_types.filter(
        tp => tp.id === route.params.item.category,
      )[0].name;
      let front = [];
      let back = [];
      front = await Data.front_muscle
        .filter(f_m => route.params.item.muscles.includes(f_m.id))
        .map(obj => ({uri: obj.img, name: obj.name}))
        .concat(
          Data.front_muscle
            .filter(b_m => route.params.item.muscles_secondary.includes(b_m.id))
            .map(obj => ({uri: obj.img_2, name: obj.name})),
        );
      back = await Data.back_muscle
        .filter(f_m => route.params.item.muscles.includes(f_m.id))
        .map(obj => ({uri: obj.img, name: obj.name}))
        .concat(
          Data.back_muscle
            .filter(b_m => route.params.item.muscles_secondary.includes(b_m.id))
            .map(obj => ({uri: obj.img_2, name: obj.name})),
        );

      await setExercise({
        name: route.params.item.name,
        equipments: eq,
        category: cat,
        description: route.params.item.description,
        front: front,
        back: back,
      });
    }
    function fetchExerciseImages() {
      restClient.getExerciseImages('exercise=' + route.params.id).then(res => {
        setImages(res.results);
      });
    }
    fetchExerciseImages();
    setProperties();
  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <MuscleHeader
        front={exercise.front.map(a => a.uri)}
        back={exercise.back.map(b => b.uri)}
      />
      <ExerciseMenu name={exercise.name} category={exercise.category} />
      {images.length > 0 ? <ExerciseImage images={images} /> : null}
      {exercise.equipments.length > 0 ? (
        <ExerciseEquipments
          equipments={exercise.equipments}
          navigation={navigation}
        />
      ) : null}
      {exercise.description.length > 5 ? (
        <ExerciseDescription description={exercise.description} />
      ) : null}
    </ScrollView>
  );
};

export default ExerciseDetails;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EC407A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
    color: 'white',
    fontSize: width / 20,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  brandText: {
    fontFamily: 'Roboto',
    color: 'white',
    flex: 1,
    textAlign: 'left',
    paddingVertical: height / 100,
    fontWeight: '700',
  },
  priceText: {
    color: 'white',
    flex: 1,
    fontSize: width / 15,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
