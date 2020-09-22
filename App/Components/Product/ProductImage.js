import React, {useState} from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
const {width} = Dimensions.get('window');

const ProductImage = ({image}) => {
  const [imageLoading, setImageLoading] = useState(false);
  return (
    <View style={{alignItems: 'center'}}>
      <FastImage
        source={{uri: 'https://' + image}}
        style={styles.imageStyle}
        resizeMode={FastImage.resizeMode.contain}
        onLoadStart={() => {
          setImageLoading(true);
        }}
        onLoadEnd={() => {
          setImageLoading(false);
        }}
      />
      {imageLoading ? (
        <ActivityIndicator
          style={styles.indicator}
          size={width / 5}
          color="#FF9800"
        />
      ) : null}
    </View>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  imageStyle: {
    backgroundColor: 'white',
    width: (6 * width) / 9,
    height: (6 * width) / 9,
    marginVertical: width / 50,
  },
  indicator: {
    position: 'absolute',
    bottom: (1 * width) / 3,
    alignItems: 'center',
    flex: 1,
  },
});
