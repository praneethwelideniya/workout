import React from 'react';
import {View, Dimensions, FlatList, Text, StyleSheet} from 'react-native';
import EquipmentGrid from './EquipmentGrid';
const {height, width} = Dimensions.get('window');

const EquipmentList = ({navigation, equipments, header}) => {
  function _renderProducts({item, index}) {
    return (
      <EquipmentGrid
        key={index}
        name={item.name}
        img={item.img}
        onPress={() => {
          navigation.navigate('Category', {
            header: 'Equipment - ',
            name: item.name,
            id: item.id,
            img: item.img,
            data: 'equipments',
            query: 'equipment=',
            isMuscle: false,
          });
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      {header != undefined ? (
        <Text style={styles.headerText}>{header}</Text>
      ) : null}
      <View>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={equipments}
          keyExtractor={(item, index) => 'list_id-' + item.name}
          renderItem={_renderProducts}
          numColumns={2}
          ListHeaderComponent={() => null}
          ListFooterComponent={() => null}
        />
      </View>
    </View>
  );
};

export default EquipmentList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: height / 200,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  headerText: {
    fontFamily: 'notoserif',
    fontWeight: 'bold',
    fontSize: width / 18,
    marginLeft: width / 30,
    marginVertical: height / 100,
  },
  flatList: {
    marginBottom: height / 200,
    marginTop: height / 200,
  },
});
