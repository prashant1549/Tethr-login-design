import React, {useState, useRef, useEffect} from 'react';
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
  Alert,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import {useDispatch} from 'react-redux';
import {addEmail} from './Services/Action/Todo';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const refs = useRef();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '32779565781-bb5t58nsodvqkhktjg2tsilh059q8gc4.apps.googleusercontent.com',
    });
  }, []);

  const onFacebookButtonPress = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    } else {
      dispatch(addEmail(data));
      try {
        await AsyncStorage.setItem('email', JSON.stringify(data));
        navigation.navigate('DrawerSideMenu');
      } catch (error) {}
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    return auth().signInWithCredential(facebookCredential);
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(addEmail(JSON.stringify(userInfo)));
      try {
        await AsyncStorage.setItem('email', JSON.stringify(userInfo));
        navigation.navigate('DrawerSideMenu');
      } catch (error) {}
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };
  const handleSubmit = async () => {
    if (email == '' || password == '') {
      setError('Please enter email or password');
    } else {
      dispatch(addEmail(email));
      try {
        await AsyncStorage.setItem('email', email);
        navigation.navigate('DrawerSideMenu');
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
            onPress={() => onFacebookButtonPress()}
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
              Sign In With Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textwrapper}>
          <GoogleSigninButton
            style={{width: 240, height: 56}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </View>
        <View style={{alignSelf: 'center', marginVertical: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={{color: 'blue'}}>I don't have account?Sing up</Text>
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
    margin: 5,
    // backgroundColor: '#fff',
  },
  align_text: {
    padding: 25,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#4b77da',
    borderRadius: 30,
    color: '#4b77da',
  },
  align_text_red: {
    padding: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#dd4b39',
    borderRadius: 30,
  },
  facebook_text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#4b77da',
  },
  google_text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#dd4b39',
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
export default LoginPage;
