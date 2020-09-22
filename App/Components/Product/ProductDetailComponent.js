import React from 'react';
import {View, ScrollView} from 'react-native';
import ProductImage from './ProductImage';
import ProductMenu from './ProductMenu';
import ProductDescription from './ProductDescription';
import ProductColors from './ProductColors';

const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

const ProductDetailComponet = ({product}) => {
  return (
    <View style={{flex: 18}}>
      <ScrollView>
        <ProductImage image={product.api_featured_image} />
        <ProductMenu
          name={entities.decode(product.name).trim()}
          brand={product.brand}
          price={product.price}
        />
        {product.description.length > 0 ? (
          <ProductDescription
            description={entities.decode(product.description).trim()}
          />
        ) : null}
        {product.product_colors != undefined &&
        product.product_colors.length > 0 ? (
          <ProductColors colors={product.product_colors} />
        ) : null}
      </ScrollView>
    </View>
  );
};

export default ProductDetailComponet;
