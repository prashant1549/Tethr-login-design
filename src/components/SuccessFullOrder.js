import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SuccessfullPlace = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -150,
        }}>
        <Icon name="check" size={30} color="white" />
      </View>
      <Text style={{fontSize: 25, color: 'green', marginTop: 10}}>
        {' '}
        Order Successfull{' '}
      </Text>
      <Text style={{fontSize: 15, color: 'gray'}}>
        {' '}
        Your Order has been successfull placed{' '}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DrawerSideMenu');
        }}
        style={{
          backgroundColor: 'green',
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
          Back To Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessfullPlace;
