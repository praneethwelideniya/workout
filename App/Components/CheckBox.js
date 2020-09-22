import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');

const CheckBox = ({name, onPress, checked}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: checked ? 'orange' : '#DCDCDC'},
      ]}>
      <Icon
        style={styles.icon}
        name={checked ? 'check-square-o' : 'square-o'}
        size={height / 30}
        color={checked ? 'black' : 'gray'}
      />
      <View style={{flex: 5}}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: width / 500,
    borderRadius: width / 100,
    alignItems: 'center',
    paddingHorizontal: width / 100,
    borderColor: 'gray',
    marginVertical: height / 900,
  },
  icon: {flex: 1, justifyContent: 'center'},
  text: {fontSize: height / 80, fontWeight: 'bold'},
});
