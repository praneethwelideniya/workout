import React from 'react';
import {View, ImageBackground} from 'react-native';

const Splash = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground
        source={require('../Assets/splash.png')}
        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
      />
    </View>
  );
};

export default Splash;
