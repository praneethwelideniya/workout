import React, {useEffect, useState} from 'react';
import {View, Dimensions, ActivityIndicator, Alert} from 'react-native';
import {productService} from '../Services/ProductService';
import ProductDetailComponet from '../Components/Product/ProductDetailComponent';
import BottomButton from '../Components/BottomButton';
const {width} = Dimensions.get('window');

const ProductDetails = ({navigation, route}) => {
  const [loading, setloading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      await productService
        .getById(route.params.id)
        .then(data => {
          if (!data.success) {
            makeServiceError(data.error);
          } else {
            setProduct(data.results);
          }
        })
        .catch(error => {});
      setloading(false);
    }
    getProduct();
  }, []);

  makeServiceError = error => {
    Alert.alert(
      'Error',
      'Something went wrong. Check your internet connection',
      [{text: 'OK', onPress: () => navigation.goBack(null)}],
      {cancelable: true},
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {loading ? (
        <ActivityIndicator
          style={{alignItems: 'center', flex: 1}}
          size={width / 5}
          color="#FF9800"
        />
      ) : product != null ? (
        <>
          <ProductDetailComponet product={product} />
          <BottomButton link={product.product_link} />
        </>
      ) : null}
    </View>
  );
};

export default ProductDetails;
