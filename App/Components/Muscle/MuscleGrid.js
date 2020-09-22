import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {SvgCssUri} from 'react-native-svg';
const {height, width} = Dimensions.get('window');

const MuscleGrid = ({uri, header, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
      }}
      onPress={onPress}>
      <>
        <View>
          <SvgCssUri
            width="100%"
            height="100%"
            uri={uri}
            viewBox="0 0 200 400"
            style={{position: 'relative'}}
          />
        </View>
        <Text
          style={{
            zIndex: 1,
            textAlign: 'center',
            fontSize: width / 22,
            fontWeight: 'bold',
            color: 'red',
            bottom: height / 4,
          }}>
          {header}
        </Text>
      </>
    </TouchableOpacity>
  );
};

export default MuscleGrid;
