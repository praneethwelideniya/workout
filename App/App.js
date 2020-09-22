import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {Alert, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Containers/Home';
import Muscle from './Containers/Muscle';
import Category from './Containers/Category';
import ExerciseDetails from './Containers/ExerciseDetails';
import AsyncStorage from '@react-native-community/async-storage';
import {Dimensions} from 'react-native';
import {productService} from './Services/ProductService';
import Splash from './Containers/Splash';

import {FilterContext, ProductContext} from './Context';
import Muscles from './Components/Muscle/Muscles';
const {height} = Dimensions.get('window');

const filtersTemplate = {
  category: [],
  tags: [],
};

const Stack = createStackNavigator();
const App = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    makeServiceError = () => {
      Alert.alert(
        'Error',
        'Something went wrong. This apllication requires internet connection. Please check your internet connection',
        [{text: 'OK', onPress: () => BackHandler.exitApp()}],
        {cancelable: true},
      );
    };
    async function fetchData() {
      await productService
        .get('?rating_greater_than=4.9')
        .then(async data => {
          if (!data.success) {
            makeServiceError();
          } else {
            await AsyncStorage.setItem(
              'products',
              JSON.stringify(data.results),
            );
            setProducts(data.results);
            setTimeout(() => {
              setLoading(false);
            }, 100);
          }
        })
        .catch(error => {
          makeServiceError();
        });
    }

    async function loadProdcts() {
      try {
        let tempProducts = await AsyncStorage.getItem('products');
        if (tempProducts == null || JSON.parse(tempProducts).length == 0) {
          await fetchData();
        } else {
          setProducts(JSON.parse(tempProducts));
          setTimeout(() => {
            setLoading(false);
          }, 800);
        }
      } catch (error) {
        makeServiceError();
      }
    }
    loadProdcts();
  }, []);

  const [filters, setFilters] = useState(filtersTemplate);
  return (
    <ProductContext.Provider value={products}>
      <FilterContext.Provider
        value={{
          filters: filters,
          changeFilters: val => {
            setFilters(val);
          },
        }}>
        <NavigationContainer>
          <Stack.Navigator>
            {loading ? (
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{
                    title: 'WorkOut',
                    headerStyle: {
                      backgroundColor: 'orange',
                      shadowOpacity: 0,
                      height: height / 11,
                      shadowOffset: {
                        height: 0,
                      },
                      shadowRadius: 0,
                      elevation: 0,
                    },
                    headerTitleStyle: {
                      fontWeight: '600',
                      color: 'white',
                      fontSize: height / 28,
                    },
                  }}
                />
                <Stack.Screen
                  name="Muscle"
                  component={Muscle}
                  options={({route}) => ({
                    title: 'Muscle - ' + route.params.header,
                    headerStyle: {
                      backgroundColor: 'orange',
                      shadowOpacity: 0,
                      shadowOffset: {
                        height: 0,
                      },
                      shadowRadius: 0,
                      elevation: 0,
                    },
                    headerTitleStyle: {
                      fontWeight: '600',
                      color: 'white',
                    },
                  })}
                />
                <Stack.Screen
                  name="Category"
                  component={Category}
                  options={({route}) => ({
                    title: route.params.header + route.params.name,
                    headerStyle: {
                      backgroundColor: 'orange',
                      shadowOpacity: 0,
                      shadowOffset: {
                        height: 0,
                      },
                      shadowRadius: 0,
                      elevation: 0,
                    },
                    headerTitleStyle: {
                      fontWeight: '600',
                      color: 'white',
                    },
                  })}
                />
                <Stack.Screen
                  name="ExerciseDetails"
                  component={ExerciseDetails}
                  options={{
                    title: 'Exercise Details',
                    headerStyle: {
                      backgroundColor: 'orange',
                      shadowOpacity: 0,
                      shadowOffset: {
                        height: 0,
                      },
                      shadowRadius: 0,
                      elevation: 0,
                    },
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </FilterContext.Provider>
    </ProductContext.Provider>
  );
};
export default App;
