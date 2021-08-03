'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Slide = ({heading, text}) => {
  return (
    <View style={{alignItems: 'stretch', flex: 1}}>
      <View style={styles.page}>
        <Image
          style={styles.image}
          source={require('../assets/tour-tick.png')}
        />

        <Text style={styles.title}>{heading}</Text>

        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#333',
    textAlign: 'center',
    margin: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    padding: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
export default Slide;
