import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';

const YourOrder = () => {
  const yourOrder = useSelector(state => state.TodoReducer.orderDetails);
  return (
    <View>
      <FlatList
        data={yourOrder}
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
            <View style={{flex: 1}}>
              <Image
                resizeMode="contain"
                source={{
                  uri: item.image,
                }}
                style={{width: 50, height: 70}}
              />
            </View>
            <View style={{flex: 3, justifyContent: 'center', marginLeft: 5}}>
              <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                {item.title}{' '}
              </Text>
              <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                Ptrice : {item.Price}{' '}
              </Text>
              <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                Quantity : {item.quantity}{' '}
              </Text>
              {/* <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                {item.title}{' '}
              </Text> */}
            </View>
            <View style={{flex: 3, justifyContent: 'center', marginLeft: 5}}>
              <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                Delevered to{' '}
              </Text>
              <View
                style={{
                  height: 1,
                  borderWidth: 1,
                  marginVertical: 10,
                }}
              />
              <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                Cost name : {item.custName}{' '}
              </Text>
              <Text numberOfLines={2} style={{fontWeight: 'bold'}}>
                Address : {item.address}, {item.city},{item.state},(
                {item.pincode})
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default YourOrder;
