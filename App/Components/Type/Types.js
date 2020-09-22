import React from 'react';
import {View, Dimensions, FlatList, StyleSheet, Text} from 'react-native';
import TypeGrid from './TypeGrid';
const {height, width} = Dimensions.get('window');

const CONTAINER_HEIGHT = (3 * height) / 10;
const Types = ({types, navigation}) => {
  function _renderTypes({item, index}) {
    return (
      <TypeGrid
        name={item.name}
        color={item.color}
        img={item.img}
        height={CONTAINER_HEIGHT}
        onPress={() =>
          navigation.navigate('Category', {
            id: item.id,
            img: item.img,
            header: 'Category - ',
            name: item.name,
            data: 'exercise_types',
            query: 'category=',
            isMuscle: false,
          })
        }
      />
    );
  }
  return (
    <View
      style={{
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderTopStartRadius: height / 50,
        borderBottomStartRadius: height / 50,
        marginTop: 10,
        marginLeft: 5,
      }}>
      <Text
        style={{
          fontSize: 20,
          marginTop: height / 100,
          marginLeft: width / 40,
          fontWeight: 'bold',
        }}>
        Categories
      </Text>
      <View
        style={{
          marginBottom: CONTAINER_HEIGHT / 20,
          marginTop: CONTAINER_HEIGHT / 60,
        }}>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={types}
          keyExtractor={(item, index) => 'list_id-' + index}
          renderItem={_renderTypes}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Types;

const styles = StyleSheet.create({
  flatListContainer: {
    marginBottom: height / 50,
    marginTop: height / 50,
  },
});
