import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './StackBar.styles';
import SafeAreaContainer from '../SafeAreaContainer/SafeAreaContainer';

export default function StackBar() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.container, paddingTop: insets.top}}>
      {/* <View style={{...styles.container, paddingTop: 0}}> */}
      <Text>StackBar</Text>
      {/* </View> */}
    </View>
  );
}
