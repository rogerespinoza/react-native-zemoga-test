import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, size} from '../../styles/index';

import {styles} from './PostItem.styles';

export default function PostItem({item, index, disableFavorite}) {
  const {title, id} = item;
  return (
    <TouchableOpacity
      key={id}
      /* onPress={() => setSearch(item)} */ style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.readSignal} />
      </View>
      <View style={styles.box2}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
      </View>
      <View style={styles.box3}>
        {!disableFavorite && <View style={styles.iconStart}></View>}
      </View>
      <View style={styles.box4}>
        <View style={styles.buttonClose}></View>
      </View>
    </TouchableOpacity>
  );
}
