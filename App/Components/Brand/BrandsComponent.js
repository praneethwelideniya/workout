import React from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import BrandGrid from './BrandGrid';
const {height, width} = Dimensions.get('window');

const BrandsComponent = ({onPress, brands}) => {
  function _renderBrands({item}) {
    return <BrandGrid item={item} onPress={onPress} />;
  }

  chunk = (arr, size) =>
    Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
      arr.slice(i * size, i * size + size),
    );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Brands</Text>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={chunk(brands, 6)}
        keyExtractor={(item, index) => 'list_id-' + index}
        renderItem={_renderBrands}
        horizontal={true}
      />
    </View>
  );
};
export default BrandsComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: width / 100,
    marginVertical: height / 100,
    backgroundColor: 'white',
    borderTopStartRadius: width / 40,
    borderBottomStartRadius: width / 40,
    zIndex: 2,
  },
  text: {
    fontFamily: 'notoserif',
    fontWeight: 'bold',
    fontSize: width / 18,
    marginLeft: width / 30,
  },
  flatListContainer: {
    marginBottom: height / 200,
    marginTop: height / 200,
  },
});
