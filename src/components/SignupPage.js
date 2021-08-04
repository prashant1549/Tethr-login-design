import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SignupPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const refs = useRef();

  const handleSubmit = async () => {
    if (email == '' || password == '' || name == '') {
      setError('Please enter email or password or name');
    } else {
      try {
        await AsyncStorage.setItem('email', email);
        navigation.navigate('Product');
      } catch (error) {}
    }
  };

  var {height, width} = Dimensions.get('window');
  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.container,
          {width: width * 0.95, paddingLeft: width * 0.05},
        ]}>
        <View style={styles.logo}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../assets/splash-logo.png')}></Image>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'red'}}>{error}</Text>
        </View>
        <View style={styles.textwrapper}>
          <TextInput
            returnKeyLabel="Name"
            placeholderTextColor="gray"
            underlineColorAndroid="gray"
            autoCapitalize="words"
            returnKeyType={'next'}
            color="black"
            placeholder={'Name'}
            style={styles.textfield}
            onChangeText={text => setName(text)}
            onSubmitEditing={() => {
              refs['email'].focus();
            }}
            value={name}>
            {/* <Text>bnmmnm</Text> */}
          </TextInput>
        </View>
        <View style={styles.textwrapper}>
          <TextInput
            refs="email"
            placeholderTextColor="gray"
            underlineColorAndroid="gray"
            returnKeyType={'next'}
            keyboardType={'email-address'}
            placeholder={'Email'}
            color="black"
            style={{
              height: 40,
              borderColor: '#f3f3f3',
              width: 300,
              borderWidth: StyleSheet.hairlineWidth,
            }}
            onChangeText={text => setEmail(text)}
            onSubmitEditing={() => {
              refs['pass'].focus();
            }}
            value={email}></TextInput>
        </View>
        <View style={styles.textwrapper}>
          <TextInput
            refs="pass"
            placeholderTextColor="gray"
            underlineColorAndroid="gray"
            returnKeyType={'go'}
            secureTextEntry={true}
            color="black"
            placeholder={'Password'}
            style={{
              height: 40,
              borderColor: '#f3f3f3',
              width: 300,
              borderWidth: StyleSheet.hairlineWidth,
            }}
            onChangeText={text => setPassword(text)}
            value={password}></TextInput>
        </View>
        <View style={styles.textwrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Product');
            }}
            style={{
              borderWidth: 1,
              width: 230,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#4b77da',
            }}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <Image
              style={{width: 50, height: 50, borderRadius: 10, marginLeft: -13}}
              source={require('../assets/facebook.png')}
            />
            <Text style={{color: '#fff', marginLeft: 10, fontWeight: 'bold'}}>
              Sign Up With Facebook
            </Text>
            {/* <View style={styles.rounded_blue}>
              <View
                style={[
                  styles.align_text,
                  {width: width * 0.75, flexDirection: 'row'},
                ]}>
                <Image
                  style={{width: 50, height: 20}}
                  source={require('../assets/gg.png')}
                />
                <Text style={styles.facebook_text}>SIGN UP VIA FACEBOOK</Text>
              </View>
            </View> */}
          </TouchableOpacity>
        </View>
        <View style={styles.textwrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Product');
            }}
            style={{
              borderWidth: 1,
              width: 230,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#dd4b39',
            }}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <Image
              style={{width: 50, height: 50, borderRadius: 10, marginLeft: -25}}
              source={require('../assets/gg.png')}
            />
            <Text style={{color: '#fff', marginLeft: 12, fontWeight: 'bold'}}>
              Sign Up With Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', marginVertical: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{color: 'blue'}}>have already account?login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container_end}>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={styles.green_background}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View>
            <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  toolbar: {
    height: 56,
  },
  logo: {
    alignItems: 'center',
  },
  textwrapper: {
    height: 80,
  },
  textfield: {
    height: 40,
    width: 300,
    borderColor: '#f3f3f3',
    borderWidth: StyleSheet.hairlineWidth,
  },
  rounded_blue: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  align_text: {
    padding: 25,
    alignSelf: 'center',
    borderWidth: 1,

    borderColor: '#4b77da',
    borderRadius: 10,
    color: '#FFFFFF',
  },
  align_text_red: {
    padding: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#dd4b39',
    borderRadius: 10,
  },
  facebook_text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#4b77da',
  },
  google_text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  container_end: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  green_background: {
    backgroundColor: '#22c064',
    alignSelf: 'flex-end',
    flex: 1,
    padding: 20,
  },
});
export default SignupPage;
