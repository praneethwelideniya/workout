import axios from 'axios';

const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

const api = axios.create({
  baseURL: 'https://wger.de/api/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

function get(query) {
  return api
    .get('/exercise/?status=2&limit=100&ordering=name&language=2&' + query)
    .then(async response => {
      return await {
        success: true,
        results: response.data,
        error: false,
      };
    })
    .catch(function(error) {
      console.warn(error);
      return {success: false, error: error};
    });
}

function getById(id) {
  console.warn(id)
  var res = [];
  return api
    .get('/exercise/' + id)
    .then(async response => {
      console.warn(response)
      return {success: true, results: response.data, error: false};
    })
    .catch(function(error) {
      return {success: false, error: error};
    });
}

function getExerciseImages(query){
  var res = [];
   return api
    .get('exerciseimage/?limit=2&'+ query)
    .then(async response => {
      return await {
        success: true,
        results: response.data.map(im=>im.image),
        error: false,
      };
    })
    .catch(function(error) {
      console.warn(error);
      return {success: false, error: error};
    });
}

export const restClient = {
  getExerciseImages,
  getById,
  get,
};
