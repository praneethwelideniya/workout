import React from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const ProductMenu = ({name, brand, price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.container2}>
        <Text style={styles.brandText}>{brand}</Text>
        {price != null &&
        price != undefined &&
        price != '0.0' &&
        price != '0' &&
        price != 0 ? (
          <Text style={styles.priceText}>${price}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default ProductMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EC407A',
    paddingHorizontal: width / 20,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  nameText: {
    fontFamily: 'sans-serif-light',
    paddingTop: height / 100,
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
