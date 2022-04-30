import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import UserDetails from '../screens/UserDetails/UserDetails';
import HomeTopTabNav from './HomeTopTabNav';
import StackBar from '../components/StackBar/StackBar';

const Stack = createStackNavigator();

export default function PostsStackNav() {
  return (
    <Stack.Navigator
      // defaultScreenOptions={{
      //   headerBackgroundContainerStyle: {
      //     backgroundColor: 'red',
      //   },
      //   headerStyle: {
      //     backgroundColor: 'red',
      //   },
      // }}
      screenOptions={{
        headerShown: false,
        // header: props => <StackBar {...props} />,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Posts" component={HomeTopTabNav} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  );
}
