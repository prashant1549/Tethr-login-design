import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Product from '../assets/product1.png';
import {useSelector, useDispatch} from 'react-redux';
import {deleteCart} from './Services/Action/Todo';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartItem = ({navigation}) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  const Data = useSelector(state => state.TodoReducer.cart);

  const handleDelete = async item => {
    const filterData = Data.filter(n1 => n1 !== item);
    dispatch(deleteCart(item));
    try {
      await AsyncStorage.setItem('CartItem', JSON.stringify(filterData));
    } catch (error) {}
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={Data}
        keyExtractor={item => item}
        renderItem={({item, index}) => (
          <View
            style={{
              height: 100,
              flexDirection: 'row',
              margin: 10,
              alignSelf: 'center',
              backgroundColor: '#FFFFFF',
            }}>
            <View style={{flex: 2}}>
              <Image
                resizeMode="contain"
                source={Product}
                style={{width: 60, height: 100}}
              />
            </View>
            <View style={{flex: 4, justifyContent: 'center'}}>
              <Text numberOfLines={1}>jsbdjksad jdkjsdn </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity
                  onPress={() => setNumber(number => number - 1)}>
                  <Icon name="remove" size={20} color="green" />
                </TouchableOpacity>
                <Text style={{marginHorizontal: 20}}>{number}</Text>
                <TouchableOpacity
                  onPress={() => setNumber(number => number + 1)}>
                  <Icon name="add" size={20} color="green" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 2,
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
            navigation.navigate('Place Order');
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
