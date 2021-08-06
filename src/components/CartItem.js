import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Product from '../assets/product1.png';
import {useSelector, useDispatch} from 'react-redux';
import {
  deleteCart,
  checkITEM,
  addQunatity,
  orderPlace,
} from './Services/Action/Todo';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartItem = ({navigation}) => {
  const dispatch = useDispatch();
  const Data = useSelector(state => state.TodoReducer.cart);
  const handleDelete = async item => {
    const filterData = Data.filter(n1 => n1 !== item);
    dispatch(deleteCart(item));
    try {
      await AsyncStorage.setItem('CartItem', JSON.stringify(filterData));
    } catch (error) {}
  };
  const handleQuantity = async (value, id) => {
    const data = [...Data];
    const findIndex = data.findIndex(n1 => n1.id === id);
    data[findIndex].quantity = data[findIndex].quantity + value;

    dispatch(addQunatity(data));
    try {
      await AsyncStorage.setItem('CartItem', JSON.stringify(Data));
      navigation.navigate('Cart Item');
    } catch (error) {}
  };
  const onIndexCheckBox = async id => {
    const data = [...Data];
    const findIndx = data.findIndex(n1 => n1.id === id);
    data[findIndx].isSelected = !data[findIndx].isSelected;
    dispatch(checkITEM(data));
    try {
      await AsyncStorage.setItem('CartItem', JSON.stringify(data));
    } catch (error) {}
  };
  const handleplace = () => {
    const filterdata = Data.filter(n1 => n1.isSelected === true);
    if (filterdata.length > 0) {
      navigation.navigate('Place Order');
    } else {
      alert('Please select product');
    }
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View
            style={{
              height: 100,
              flexDirection: 'row',
              margin: 10,
              alignSelf: 'center',
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgray',
              }}>
              <CheckBox
                value={item.isSelected}
                disabled={false}
                onValueChange={() => onIndexCheckBox(item.id)}
                style={{
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{flex: 2}}>
              <Image
                resizeMode="contain"
                source={{
                  uri: item.image,
                }}
                style={{width: 80, height: 100}}
              />
            </View>
            <View style={{flex: 4, justifyContent: 'center', marginLeft: 5}}>
              <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                {item.title}{' '}
              </Text>
              <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                Price : {item.price * item.quantity}{' '}
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity onPress={() => handleQuantity(-1, item.id)}>
                  <Icon name="remove" size={20} color="green" />
                </TouchableOpacity>
                <Text style={{marginHorizontal: 20}}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleQuantity(+1, item.id)}>
                  <Icon name="add" size={20} color="green" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginLeft: 10,
              }}>
              <TouchableOpacity onPress={() => handleDelete(item)}>
                <Icon name="delete" size={30} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'stretch'}}>
        <TouchableOpacity
          onPress={() => {
            handleplace();
          }}
          style={{backgroundColor: 'green', padding: 20}}>
          <View>
            <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>
              Order Place
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
