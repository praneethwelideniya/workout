import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width} = Dimensions.get('window');
import FastImage from 'react-native-fast-image';

const TypeGrid = ({name, height, onPress, img, color}) => {
  return (
    <View style={[styles.typeCard, {marginHorizontal: width / 140}]}>
      <TouchableOpacity
        style={[
          styles.typeCircle,
          {
            backgroundColor: 'orange',
          },
        ]}
        onPress={onPress}>
        <>
          <FastImage
            source={{
              uri: img,
            }}
            style={styles.img}
            resizeMode={FastImage.resizeMode.contain}
          />
          {/* <Image
            source={{
              uri:
                'https://wger.de/media/exercise-images/129/Standing-biceps-curl-2.png',
            }}
            style={{height: width / 10, width: width / 10}}
          /> */}
          <Text
            style={[
              styles.typeText,
              {fontSize: height / 10, fontFamily: 'sans-serif-condensed'},
            ]}>
            {name}
          </Text>
        </>
      </TouchableOpacity>
    </View>
  );
};

export default TypeGrid;

const styles = StyleSheet.create({
  typeCard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  typeCircle: {
    alignItems: 'center',
    borderWidth: 0,
    height: width / 2.8,
    width: width / 2.8,
    borderRadius: width / 40,
  },
  typeRow: {
    flexDirection: 'row',
  },
  typeText: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: width / 7,
    textAlign: 'center',
  },
  img: {
    flex: 1,
    height: (3 * width) / 10,
    width: (3 * width) / 10,
    margin: 5,
  },
});
