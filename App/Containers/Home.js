import React, {useContext} from 'react';
import {ScrollView, View} from 'react-native';
import Types from '../Components/Type/Types';
import MuscleOverview from '../Components/Muscle/MuscleOverview';
import Data from '../data';
import EquipmentList from '../Components/Equipment/EquipmentList';
import {ProductContext} from '../Context';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const products = useContext(ProductContext);
  return (
    <View>
      <ScrollView>
        <MuscleOverview navigation={navigation} />
        <Types types={Data.exercise_types} navigation={navigation} />
        <EquipmentList
          equipments={Data.equipments}
          navigation={navigation}
          header="Equipments"
        />
      </ScrollView>
    </View>
  );
};

export default Home;
