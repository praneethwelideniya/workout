import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const BottomButton = ({link}) => {
  return (
    <View style={styles.container}>
      {link.length > 0 ? (
        <TouchableOpacity
          onPress={async () => {
            await Linking.openURL(link);
          }}
          style={styles.button}>
          <Text style={styles.buttonName}>Check In Website</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default BottomButton;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  buttonName: {
    fontWeight: 'bold',
    fontSize: height / 35,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -height / 70,
    flex: 1,
    borderTopLeftRadius: width / 15,
    borderTopRightRadius: width / 15,
    backgroundColor: '#FF9800',
  },
});
