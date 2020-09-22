import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
const {width} = Dimensions.get('window');
import FastImage from 'react-native-fast-image';

const EquipmentGrid = ({name, img, onPress}) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <TouchableOpacity style={styles.productCard} onPress={onPress}>
      <View style={styles.imgContainer}>
        {imageLoading ? (
          <ActivityIndicator
            style={{
              position: 'absolute',
              bottom: (2 * width) / 16,
              alignItems: 'center',
              flex: 1,
            }}
            size={width / 10}
            color="#FF9800"
          />
        ) : null}
        <Text style={styles.productText}>{name}</Text>
        <FastImage
          source={{uri: img}}
          style={styles.img}
          resizeMode={FastImage.resizeMode.contain}
          onLoadStart={() => {
            setImageLoading(true);
          }}
          onLoadEnd={() => {
            setImageLoading(false);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default EquipmentGrid;

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    margin: width / 100,
    maxWidth: width / 2,
  },
  imgContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  productText: {
    flex: 1,
    fontSize: width / 30,
    fontWeight: 'bold',
    top: 0,
    textAlign: 'center',
  },
  productPriceText: {
    flex: 1,
    fontSize: width / 20,
    fontWeight: '500',
    textAlign: 'right',
  },
  img: {
    flex: 1,
    height: (3 * width) / 8,
    width: (3 * width) / 8,
    marginBottom: 5,
  },
});
