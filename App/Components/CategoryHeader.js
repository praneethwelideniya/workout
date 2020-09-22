import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
const {height, width} = Dimensions.get('window');
import CheckBox from './CheckBox';
import Muscles from './Muscle/Muscles';

const CategoryHeader = ({list, onPress, selected, isMuscle, data}) => {
  _renderList = (item, index) => (
    <CheckBox
      name={item.name}
      checked={item.id == selected.id ? true : false}
      onPress={() => {
        onPress(
          {
            img: item.img,
            id: item.id,
          },
          {name: item.name},
        );
      }}
    />
  );
  return (
    <View
      style={[
        styles.container,
        {flexDirection: data == 'back_muscle' ? 'row-reverse' : 'row'},
      ]}>
      {isMuscle ? (
        <View style={styles.muscle}>
          <Muscles
            uri={
              data == 'front_muscle'
                ? 'https://wger.de/static/images/muscles/muscular_system_front.svg'
                : 'https://wger.de/static/images/muscles/muscular_system_back.svg'
            }
            muscleUri={[selected.img]}
          />
        </View>
      ) : (
        <View style={styles.imgContainer}>
          <FastImage
            source={{
              uri: selected.img,
            }}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.img}
          />
        </View>
      )}
      <View style={{flex: isMuscle ? 3 : 1, justifyContent: 'space-evenly'}}>
        {list.map((item, index) => _renderList(item, index))}
      </View>
    </View>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height / 2.8,
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  muscle: {flex: 2.2, marginTop: 10},
  imgContainer: {flex: 1, alignItems: 'center'},
  img: {
    flex: 1,
    height: height / 3.1,
    width: width / 2.5,
  },
});
