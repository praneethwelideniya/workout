import React from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

const ProductDescription = ({description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Description</Text>
      <Text style={styles.bodyText}>{description}</Text>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: width / 20,
    alignItems: 'flex-start',
    paddingRight: width / 100,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingBottom: height / 80,
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
});
