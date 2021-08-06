import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addEmail} from './Services/Action/Todo';
import AsyncStorage from '@react-native-community/async-storage';

const Logout = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await AsyncStorage.removeItem('email');
      dispatch(addEmail(null));
      navigation.navigate('Home');
    });

    return unsubscribe;
  }, [navigation]);
  return <View></View>;
};
export default Logout;
