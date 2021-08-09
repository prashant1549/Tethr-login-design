import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {addOrderDetails, checkITEM, deleteCart} from './Services/Action/Todo';

const OrderPlace = ({navigation}) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPinCode] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  var {height, width} = Dimensions.get('window');
  const Data = useSelector(state => state.TodoReducer.cart);
  const filterData = Data.filter(n1 => n1.isSelected === true);
  let totalPrice = 0;
  const lapsList = filterData.map(data => {
    totalPrice = totalPrice + data.price * data.quantity;
    return (
      <View
        key={data.id}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          backgroundColor: '#fff',
        }}>
        <Image
          style={{flex: 0.5, width: 50, height: 100}}
          source={{uri: data.image}}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>{data.title}</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            Quantity : {data.quantity}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            Price : {data.price * data.quantity}
          </Text>
        </View>
      </View>
    );
  });
  let totalFare =
    totalPrice + (totalPrice * 18) / 100 - (totalPrice * 10) / 100 + 30;
  const handleSubmit = async () => {
    if (
      address == '' ||
      city == '' ||
      state == '' ||
      pincode == '' ||
      name == ''
    ) {
      setError('Please enter full address');
    } else {
      const localValue = JSON.parse(
        (await AsyncStorage.getItem('OrderDetails')) || '[]',
      );
      const carData = [...Data];
      const makeCart = () => {
        const sts = filterData.map(n1 => ({
          id: n1.id,
          custName: name,
          title: n1.title,
          price: n1.price,
          quantity: n1.quantity,
          image: n1.image,
          address: address,
          city: city,
          state: state,
          pincode: pincode,
        }));
        return sts;
      };
      const sts = makeCart();
      dispatch(addOrderDetails(sts));
      localValue.push(...sts);
      const filterCart = carData.filter(n1 => n1.isSelected !== true);
      dispatch(checkITEM(filterCart));
      setAddress('');
      setState('');
      setCity('');
      setName('');
      setPinCode('');
      try {
        await AsyncStorage.setItem('OrderDetails', JSON.stringify(localValue));
        await AsyncStorage.setItem('CartItem', JSON.stringify(filterCart));
        navigation.navigate('successfull');
      } catch (error) {}
    }
  };
  return (
    <SafeAreaView
      style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
      <ScrollView style={{flex: 0.9, marginBottom: 20}}>
        {lapsList}

        <View style={{marginTop: 20, backgroundColor: '#fff'}}>
          <Text
            style={{fontWeight: 'bold', fontSize: 23, marginHorizontal: 10}}>
            Address Details :
          </Text>
          <View
            style={{
              width: width,
              height: 1,
              borderWidth: 1,
              marginVertical: 10,
            }}
          />
          <View style={{alignItems: 'center'}}>
            <Text style={{textAlign: 'center', color: 'red'}}>{error}</Text>
          </View>
          <Text
            style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 13}}>
            Name :
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setName(value)}
            value={name}
            placeholder="Enter Delivery Address"
            placeholderTextColor="gray"
          />
          <Text
            style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 13}}>
            Address :
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setAddress(value)}
            value={address}
            placeholder="Enter Delivery Address"
            placeholderTextColor="gray"
          />
          <Text
            style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 13}}>
            City :
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setCity(value)}
            value={city}
            placeholder="Enter City name"
            placeholderTextColor="gray"
          />
          <Text
            style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 13}}>
            State :
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setState(value)}
            value={state}
            placeholder="Enter State name"
            placeholderTextColor="gray"
          />
          <Text
            style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 13}}>
            Pin code :
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={value => setPinCode(value)}
            value={pincode}
            placeholder="Enter pin code"
            placeholderTextColor="gray"
          />
          <Text
            style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 13}}>
            Total Fare:
          </Text>
          <View
            style={{
              width: width,
              height: 1,
              borderWidth: 1,
              marginVertical: 10,
            }}
          />
          <View style={{marginLeft: 15}}>
            <Text>Product Price : {totalPrice} </Text>
            <Text>GST 18%: {(totalPrice * 18) / 100} </Text>
            <Text>Delivery charge: 30 </Text>
            <Text>Discount 10%: {(totalPrice * 10) / 100} </Text>
          </View>
          <View
            style={{
              width: width,
              height: 1,
              borderWidth: 1,
            }}
          />
          <Text style={{marginLeft: 15}}>Total Fare: {totalFare} </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => handleSubmit()}
        style={{
          flex: 0.1,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'stretch',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
          Order Place
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#000',
  },
});

export default OrderPlace;
