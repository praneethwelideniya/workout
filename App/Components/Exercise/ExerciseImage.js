import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
const {height, width} = Dimensions.get('window');

const ExerciseImage = ({images}) => {
  return (
    <View style={styles.container}>
      {images.map(img => (
        <FastImage
          source={{uri: img}}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.img}
        />
      ))}
    </View>
  );
};

export default ExerciseImage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: height / 70,
    paddingHorizontal: width / 75,
  },
  img: {
    height: height / 3,
    minWidth: width / 2 - width / 75,
  },
});
