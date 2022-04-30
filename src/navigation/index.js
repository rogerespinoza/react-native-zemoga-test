import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {color} from '../styles/index';

import PostsStackNav from './PostsStackNav';

export default function AppNavigation() {
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
