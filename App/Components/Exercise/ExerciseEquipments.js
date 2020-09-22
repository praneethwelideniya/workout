import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');

const ExerciseEquipments = ({equipments, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Equipments</Text>
      <View style={styles.tagList}>
        {equipments.map((eq, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tag}
            onPress={() => {
              navigation.push('Category', {
                header: 'Equipment - ',
                name: eq.name,
                index: index,
                id: eq.id,
                img: eq.img,
                data: 'equipments',
                query: 'equipment=',
                isMuscle: false,
              });
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              {eq.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ExerciseEquipments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: width / 20,
    alignItems: 'flex-start',
    paddingRight: width / 100,
    borderColor: 'gray',
    paddingBottom: height / 80,
    borderBottomWidth: 1,
  },
  headerText: {
    fontFamily: 'notoserif',
    paddingTop: height / 100,
    fontWeight: 'bold',
    fontSize: width / 20,
  },
  bodyText: {
    color: 'gray',
    fontFamily: 'sans-serif-thin',
    paddingVertical: height / 100,
    fontWeight: 'bold',
    fontSize: width / 27,
  },
  tagList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: width / 50,
  },
  tag: {
    backgroundColor: 'orange',
    borderWidth: width / 300,
    borderColor: 'gray',
    marginRight: width / 75,
    borderRadius: height / 50,
    paddingHorizontal: width / 40,
    paddingVertical: height / 350,
    marginVertical: height / 200,
    maxWidth: width / 4,
  },
});
