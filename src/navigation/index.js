import React from 'react';
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
        <PostsStackNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
