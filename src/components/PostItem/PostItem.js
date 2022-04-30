import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';
import StarIcon from 'react-native-vector-icons/AntDesign';

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
        {!disableFavorite && (
          <StarIcon name={'star'} size={20} color={'#a6a659'} />
        )}
      </View>
      <View style={styles.box4}>
        <ArrowIcon
          name={'chevron-right'}
          size={18}
          color={color.primary.font1 + '77'}
        />
      </View>
    </TouchableOpacity>
  );
}
