import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './ComentsItem.styles';

export default function ComentsItem({item}) {
  const {title, id} = item;
  return (
    <View key={id} style={styles.container}>
      <Text numberOfLines={3} style={styles.text}>
        {title}
      </Text>
    </View>
  );
}
