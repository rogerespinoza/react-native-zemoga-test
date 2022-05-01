import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import {color} from '../styles/index';
import PostsStackNav from './PostsStackNav';
import {postDataTry} from '../services/redux/postData/actions';
import {userDataTry} from '../services/redux/usersData/actions';

export default function AppNavigation() {
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(postDataTry());
    dispatch(userDataTry());
  };

  getData();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer
        theme={{colors: {background: color.primary.background2}}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={color.primary.background1}
        />
        <PostsStackNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
