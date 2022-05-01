import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserDetails from '../screens/UserDetails/UserDetails';
import HomeTopTabNav from './HomeTopTabNav';
import StackBar from '../components/StackBar/StackBar';

const Stack = createStackNavigator();

export default function PostsStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Posts"
        component={HomeTopTabNav}
      />
      <Stack.Screen
        name="UserDetails"
        options={{header: props => <StackBar {...props} />}}
        component={UserDetails}
      />
    </Stack.Navigator>
  );
}
