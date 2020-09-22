import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');
const BrandGrid = ({item, onPress}) => {
  return (
    <View style={styles.typeCard}>
      {item.map((itm, i) => (
        <LinearGradient
          style={styles.brandBox}
          start={{x: 0.5, y: 0.5}}
          end={{x: 1, y: 3}}
          locations={[0, 0.6]}
          colors={['#EC407A', '#FF9800']}
          key={i}>
          <TouchableOpacity
            onPress={() => {
              let str = '' + itm + '';
              onPress(str);
            }}>
            <Text style={styles.typeText}>{itm}</Text>
          </TouchableOpacity>
        </LinearGradient>
      ))}
    </View>
  );
};

export default BrandGrid;

const styles = StyleSheet.create({
  typeCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: height / 100,
  },
  brandBox: {
    height: height / 19,
    width: (2 * width) / 5,
    borderRadius: width / 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: width / 100,
  },
  typeText: {
    fontSize: height / 60,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
  },
});
