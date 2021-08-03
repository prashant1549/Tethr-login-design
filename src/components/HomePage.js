import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const HomePage = ({navigation}) => {
  var {height, width} = Dimensions.get('window');
  return (
    <ImageBackground
      style={{width: width, height: height}}
      source={require('../assets/bg1.jpg')}>
      <View style={[styles.overlay, {height: height, width: width}]} />
      <View style={styles.signup_button}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{}}>
            <View style={(styles.align_text, {width: width * 0.3})}>
              <Text style={styles.green_button_text}>Sing Up...</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View
          style={
            (styles.logo,
            {height: height * 0.5, flex: 1, justifyContent: 'center'})
          }>
          <Image
            style={{width: 100, height: 100}}
            source={require('../assets/splash-logo.png')}></Image>
        </View>
        <View
          style={
            (styles.logo,
            {height: height * 0.5, flex: 1, justifyContent: 'center'})
          }>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.green_button}>
              <View style={(styles.align_text, {width: width * 0.5})}>
                <Text style={styles.green_button_text}>LOGIN IN</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TakeTour');
            }}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.transparent_button}>
              <View style={(styles.align_text, {width: width * 0.5})}>
                <Text style={styles.green_button_text}>TAKE THE TOUR</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    alignSelf: 'center',
  },
  green_button: {
    backgroundColor: '#22c064',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 10,
    margin: 20,
  },
  signup_button: {
    // backgroundColor: '#38ABFD',
    alignItems: 'flex-end',
    // borderRadius: 30,
    // paddingTop: 10,
    // paddingBottom: 10,
    // margin: 20,
  },
  green_button_text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  transparent_button: {
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    margin: 20,
  },
  align_text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: 'black',
  },
});
export default HomePage;
