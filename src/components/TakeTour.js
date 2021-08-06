'use strict';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slide from './Slide';

const TakeTour = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = React.useRef(null);
  const tour = [
    {
      heading: 'Title',
      text: 'Thus much I thought proper to tell you in relation to yourself and to the trust I reposed in you',
    },
  ];
  const {height, width} = Dimensions.get('window');
  return (
    <ImageBackground
      style={{width: width, height: height}}
      source={require('../assets/bg1.jpg')}>
      <View style={[styles.overlay, {height: height, width: width}]} />
      <View style={styles.container}>
        <View
          style={{
            marginTop: height * 0.1 * 0.5,
            marginBottom: height * 0.1 * 0.5,
            marginLeft: width * 0.1 * 0.5,
            marginRight: width * 0.1 * 0.5,
            width: width * 0.9,
            height: height * 0.9,
            backgroundColor: '#fff',
            borderRadius: 5,
            flex: 1,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <View style={styles.cross}>
              <Icon size={30} name="close"></Icon>
            </View>
          </TouchableOpacity>
          <Slide heading={tour[0].heading} text={tour[0].text} />
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
  },
  cross: {
    alignSelf: 'flex-end',
    padding: 20,
  },
});
export default TakeTour;
