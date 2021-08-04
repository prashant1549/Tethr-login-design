import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/components/HomePage';
import LoginPage from './src/components/LoginPage';
import SignupPage from './src/components/SignupPage';
import LandingPage from './src/components/LandingPage';
import ProductDetails from './src/components/ProductDetails';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();
const App = () => {
  const [email, setEmail] = useState('');
  useEffect(async () => {
    const email = await AsyncStorage.getItem('email');
    setEmail(email);
  }, []);
  // const email = JSON.parse((await AsyncStorage.getItem('email')) || '');
  console.log(email);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: '#fff',
          },
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomePage}
        />
        {email === null ? (
          <React.Fragment>
            <Stack.Screen name="Signup" component={SignupPage} />
            <Stack.Screen name="Login" component={LoginPage} />
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <Stack.Screen name="Product" component={LandingPage} />
        <Stack.Screen name="Details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
