import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './ComentsItem.styles';

export default function ComentsItem({item}) {
  const {id, body} = item;
  return (
    <View key={id} style={styles.container}>
      <Text numberOfLines={3} style={styles.text}>
        {body}
      </Text>
    </View>
  );
}
