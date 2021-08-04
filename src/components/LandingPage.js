import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {map} from 'lodash';

const LandingPage = ({navigation}) => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const Data = [
    {id: 1, image: require('../assets/category1.png')},
    {id: 2, image: require('../assets/category2.png')},
    {id: 3, image: require('../assets/category3.png')},
    {id: 4, image: require('../assets/category4.png')},
  ];
  const _onSnapToItem = index => setIndex(index);
  const _renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <Image
          resizeMode="cover"
          style={{width: width, height: 300}}
          source={item.image}
        />
      </View>
    );
  };

  const _generateSubCats = () => {
    var {width, height} = Dimensions.get('window');
    let images = [];
    images = map([1, 2, 3, 4, 5, 6], i => {
      if (i == 1) {
        return (
          <View style={styles.subcat} key={i}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <Image
                resizeMode="contain"
                style={{width: 150, height: 150, marginVertical: 10}}
                source={require('../assets/catsub1.png')}
              />
            </TouchableOpacity>
          </View>
        );
      } else if (i == 2) {
        return (
          <View style={styles.subcat} key={i}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <Image
                resizeMode="contain"
                style={{width: 150, height: 150, marginVertical: 10}}
                source={require('../assets/catsub2.png')}
              />
            </TouchableOpacity>
          </View>
        );
      } else if (i == 3) {
        return (
          <View style={styles.subcat} key={i}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <Image
                resizeMode="contain"
                style={{width: 150, height: 150, marginVertical: 10}}
                source={require('../assets/catsub3.png')}
              />
            </TouchableOpacity>
          </View>
        );
      } else if (i == 4) {
        return (
          <View style={styles.subcat} key={i}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <Image
                resizeMode="contain"
                style={{width: 150, height: 150, marginVertical: 10}}
                source={require('../assets/catsub4.png')}
              />
            </TouchableOpacity>
          </View>
        );
      } else if (i == 5) {
        return (
          <View style={styles.subcat} key={i}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <Image
                resizeMode="contain"
                style={{width: 150, height: 150, marginVertical: 10}}
                source={require('../assets/catsub5.png')}
              />
            </TouchableOpacity>
          </View>
        );
      } else if (i == 6) {
        return (
          <View style={styles.subcat} key={i}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <Image
                resizeMode="contain"
                style={{width: 150, height: 150, marginVertical: 10}}
                source={require('../assets/catsub6.png')}
              />
            </TouchableOpacity>
          </View>
        );
      }
    });
    return images;
  };

  var {height, width} = Dimensions.get('window');
  const subcats = _generateSubCats();
  return (
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
        <View style={styles.container}>{subcats}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    flexWrap: 'wrap',
  },
  toolbar: {
    height: 56,
  },
  subcat: {
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.55,
    shadowRadius: 5.5,
    elevation: 5,
  },

  category_tree: {
    paddingLeft: 10,
  },
  category_tree_node: {
    margin: 10,
  },
});
export default LandingPage;
