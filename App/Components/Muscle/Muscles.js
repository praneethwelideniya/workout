import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {SvgCssUri} from 'react-native-svg';
const {height, width} = Dimensions.get('window');

const Muscles = ({uri, muscleUri}) => {
  return (
    <>
      <View>
        <SvgCssUri
          width="100%"
          height="100%"
          uri={uri}
          viewBox="0 0 200 400"
          style={{position: 'relative'}}
        />
        {muscleUri.map(uri=>(
          <SvgCssUri
          width="100%"
          height="100%"
          uri={uri}
          viewBox="0 0 200 400"
          style={{position: 'absolute'}}
        />
        ))}
      </View>
    </>
  );
};

export default Muscles;
