import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  DrawerLayoutAndroid,
  StyleSheet,
} from 'react-native';
import LandingPage from './LandingPage';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {asyncData} from './Services/Action/Todo';
const DrawerSideMenu = ({navigation}) => {
  const dispatch = useDispatch();
  const drawer = useRef(null);
  useEffect(async () => {
    const data = JSON.parse((await AsyncStorage.getItem('CartItem')) || '[]');
    dispatch(asyncData(data));
  }, []);
  const Data = useSelector(state => state.TodoReducer.cart);
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={{flex: 0.9}}>
        <View style={{alignSelf: 'center'}}>
          <Icon name="person" size={40} color="blue" />
        </View>
        <Text style={styles.paragraph}>UserName</Text>
        <View style={{width: 300, height: 1, borderWidth: 1}} />
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            <Icon name="person" size={30} color="gray" />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'gray',
                marginHorizontal: 10,
              }}>
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginVertical: 10,
            }}
            onPress={() => {
              navigation.navigate('Logout');
            }}>
            <Icon name="logout" size={30} color="gray" />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'gray',
                marginHorizontal: 10,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.1}}></View>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            flex: 0.07,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart Item');
              }}>
              <Icon name="shopping-cart" size={40} color="blue" />
            </TouchableOpacity>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: 'red',
                marginLeft: -10,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                {Data.length}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 0.94}}>
          <LandingPage navigation={navigation} />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default DrawerSideMenu;
