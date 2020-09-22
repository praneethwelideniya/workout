import React from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

const ProductColors = ({colors}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Colors</Text>
      <View style={styles.colorContainer}>
        {colors.map((color, i) => {
          return (
            <View
              key={i}
              style={[
                {
                  backgroundColor: color.hex_value,
                },
                styles.color,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ProductColors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: width / 20,
    alignItems: 'flex-start',
    paddingRight: width / 100,
    paddingBottom: height / 80,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  color: {
    borderWidth: 1,
    marginHorizontal: width / 80,
    height: width / 8,
    width: width / 8,
    borderRadius: width / 16,
    marginVertical: height / 200,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: width / 40,
  },
  headerText: {
    fontFamily: 'notoserif',
    paddingTop: height / 100,
    fontWeight: 'bold',
    fontSize: width / 20,
  },
});
