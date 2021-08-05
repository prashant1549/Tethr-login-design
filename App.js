import React, {useEffect, useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/components/HomePage';
import LoginPage from './src/components/LoginPage';
import SignupPage from './src/components/SignupPage';
import ProductDetails from './src/components/ProductDetails';
import CartItem from './src/components/CartItem';
import AsyncStorage from '@react-native-community/async-storage';
import DrawerSideMenu from './src/components/DrawerSideMenu';
import Logout from './src/components/Logout';
import {useDispatch, useSelector} from 'react-redux';
import {addEmail} from './src/components/Services/Action/Todo';
import OrderPlace from './src/components/OrderPlace';

const Stack = createNativeStackNavigator();
const App = () => {
  const drawer = useRef(null);
  const dispatch = useDispatch();
  useEffect(async () => {
    const data = await AsyncStorage.getItem('email');
    console.log(data, 'nskamakm');
    dispatch(addEmail(data));
  }, []);
  const email = useSelector(state => state.TodoReducer.email);
  console.log(email, 'sdjnsjkdnskdjn');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {email === null ? (
          <React.Fragment>
            <Stack.Screen
              name="Home"
              options={{headerShown: false}}
              component={HomePage}
            />

            <Stack.Screen name="Signup" component={SignupPage} />
            <Stack.Screen name="Login" component={LoginPage} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen
              name="DrawerSideMenu"
              component={DrawerSideMenu}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Details" component={ProductDetails} />
            <Stack.Screen name="Cart Item" component={CartItem} />
            <Stack.Screen name="Place Order" component={OrderPlace} />
            <Stack.Screen name="Logout" component={Logout} />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
