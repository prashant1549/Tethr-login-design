import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {addCart} from './Services/Action/Todo';
import AsyncStorage from '@react-native-community/async-storage';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const ProductDetails = ({navigation}) => {
  const carouselRef = useRef(null);
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(0);
  const [select_size, setSelectSize] = useState('');
  const [view, setView] = useState(true);
  const Data = [
    {id: 1, image: require('../assets/product1.png')},
    {id: 2, image: require('../assets/product2.png')},
    {id: 3, image: require('../assets/product3.png')},
    {id: 4, image: require('../assets/product4.png')},
  ];
  const _onSnapToItem = index => setIndex(index);

  const _renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <Image
          resizeMode="contain"
          style={{width: width, height: 300}}
          source={item.image}
        />
      </View>
    );
  };
  const handleCart = async () => {
    const data = JSON.parse((await AsyncStorage.getItem('CartItem')) || '[]');
    data.push(Math.floor(Math.random() * 1000 + 1));
    dispatch(addCart(Math.floor(Math.random() * 1000 + 1)));
    try {
      await AsyncStorage.setItem('CartItem', JSON.stringify(data));
      navigation.navigate('Cart Item');
    } catch (error) {}
  };
  var {height, width} = Dimensions.get('window');
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              height: 300,
              borderRadius: 5,
              flex: 1,
              justifyContent: 'center',
            }}>
            <Carousel
              ref={carouselRef}
              onSnapToItem={_onSnapToItem}
              data={Data}
              layout={'default'}
              layoutCardOffset={18}
              renderItem={_renderItem}
              sliderWidth={width}
              itemWidth={width}
              hasParallaxImages={true}
              testID="carousel"
              autoplay={true}
              loop={true}
              autoplayDelay={1000}
            />
            <Pagination
              dotsLength={Data.length}
              activeDotIndex={index}
              carouselRef={carouselRef}
            />
          </View>

          <View style={{height: 30, backgroundColor: 'white'}}></View>
          <View>
            <View style={styles.tab_heading_wrapper}>
              <View
                style={[
                  styles.tab,
                  {borderRightWidth: 1, borderRightColor: '#f3f3f3'},
                  view == true ? styles.tab_selected : {},
                ]}>
                <TouchableOpacity onPress={() => setView(true)}>
                  <Text style={styles.tab_text}>Info</Text>
                </TouchableOpacity>
              </View>
              <View
                style={[styles.tab, view == false ? styles.tab_selected : '']}>
                <TouchableOpacity onPress={() => setView(false)}>
                  <Text style={styles.tab_text}>Delivery</Text>
                </TouchableOpacity>
              </View>
            </View>
            {view == true ? (
              <View style={styles.tab_content_wrapper}>
                <Text style={styles.tab_content_text}>
                  1. 5.5 inch FHD IPS Display
                </Text>
                <Text style={styles.tab_content_text}>
                  2. 1920 x 1080 pixels with 2.5D Curved Screen
                </Text>
                <Text style={styles.tab_content_text}>
                  3. 4 GB RAM and 32 GB ROM
                </Text>
                <Text style={styles.tab_content_text}>
                  4. 13 MP Primary Camera and 5 MP Sec Camera
                </Text>
                <Text style={styles.tab_content_text}>
                  5. MediaTek Helio P10 – 1.8 Ghz Octa Core
                </Text>
                <Text style={styles.tab_content_text}>
                  6. 4000 mAh Li-Poly Battery
                </Text>
                <Text style={styles.tab_content_text}>
                  7. Android v5.1.1 (Lollipop) Android on Steroids
                </Text>
                <Text style={styles.tab_content_text}>
                  8. Dual SIM (LTE+LTE) and Fingerprint Sensor
                </Text>
              </View>
            ) : (
              <View style={styles.tab_content_wrapper}>
                <Text style={styles.tab_content_text}>
                  1. 13 MP Primary Camera and 5 MP
                </Text>
                <Text style={styles.tab_content_text}>
                  2. MediaTek Helio P10 – 1.8 Ghz Octa Core
                </Text>
                <Text style={styles.tab_content_text}>
                  3. 4000 mAh Li-Poly Battery
                </Text>
                <Text style={styles.tab_content_text}>
                  4. Android v5.1.1 (Lollipop) Android on Steroids
                </Text>
                <Text style={styles.tab_content_text}>
                  5. Dual SIM (LTE+LTE) and Fingerprint Sensor
                </Text>
                <Text style={styles.tab_content_text}>
                  6. Dual SIM (LTE+LTE) and Fingerprint Sensor
                </Text>
                <Text style={styles.tab_content_text}>
                  7. Dual SIM (LTE+LTE) and Fingerprint Sensor
                </Text>
              </View>
            )}
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={() => handleCart()}>
              <View style={styles.full_cart}>
                <Text style={{color: 'white', fontSize: 20}}>ADD TO CART</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  toolbar: {
    height: 56,
  },
  size_color: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#333',
    marginHorizontal: 10,
    width: 100,
    flex: 0.5,
  },
  color: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 40,
    margin: 10,
  },
  color_active: {
    width: 50,
    height: 50,
  },
  tab_heading_wrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#f3f3f3',
  },
  tab: {
    flex: 1,
    alignSelf: 'center',
    height: 50,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
  },
  tab_selected: {
    borderBottomWidth: 2,
    borderBottomColor: '#4b77da',
  },
  tab_text: {
    textAlign: 'center',
    fontSize: 20,
  },
  tab_content_wrapper: {
    paddingLeft: 10,
    marginVertical: 30,
  },
  tab_content_text: {
    fontSize: 15,
    padding: 5,
  },
  full_cart: {
    backgroundColor: '#22c064',
    height: 80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductDetails;
