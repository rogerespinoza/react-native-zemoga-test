import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllPosts from '../screens/AllPosts/AllPosts';
import FavoritePosts from '../screens/FavoritePosts/FavoritePosts';
import MaterialTopBar from '../components/MaterialTopBar/MaterialTopBar';

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTabNav() {
  return (
    <Tab.Navigator tabBar={props => <MaterialTopBar {...props} />}>
      <Tab.Screen name="All" component={AllPosts} />
      <Tab.Screen name="Favorites" component={FavoritePosts} />
    </Tab.Navigator>
  );
}
