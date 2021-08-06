import React from 'react';
import {View, Image, Dimensions} from 'react-native';

const OrderPlace = () => {
  var {height, width} = Dimensions.get('window');
  return (
    <View>
      <View style={{height}}>
        <Image
          style={{width: width, height: 510}}
          source={require('../assets/product1.png')}
        />
      </View>
    </View>
  );
};
export default OrderPlace;
