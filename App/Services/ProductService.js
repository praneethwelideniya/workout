import axios from 'axios';

const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

const productApi = axios.create({
  baseURL: 'https://makeup-api.herokuapp.com/api/v1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

function get(query) {
  var res = [];
  return productApi
    .get('products.json' + query)
    .then(async response => {
      await response.data.forEach(product => {
        let img = product.api_featured_image;
        if (img != null && img.length > 2) {
          img = 'https:' + img;
        } else {
          img = product.image_link;
        }
        res.push({
          id: product.id,
          name: entities.decode(product.name).trim(),
          price: product.price,
          img: img,
          brand: product.brand,
          product_api: product.product_api_url,
          type: product.product_type,
          rating: product.rating,
        });
      });
      return {success: true, results: res, error: false};
    })
    .catch(function(error) {
      return {success: false, error: error};
    });
}

function getById(id) {
  var res = [];
  return productApi
    .get('products/' + id)
    .then(async response => {
      return {success: true, results: response.data, error: false};
    })
    .catch(function(error) {
      return {success: false, error: error};
    });
}

export const productService = {
  get,
  getById,
};
