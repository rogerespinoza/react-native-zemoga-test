import {TouchableOpacity} from 'react-native';
import React from 'react';
import TrashIcon from 'react-native-vector-icons/AntDesign';

import {styles} from './ButtonFlotant.styles';
import {color} from '../../styles/index';

export default function ButtonFlotant({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button_flotant}>
      <TrashIcon name={'delete'} size={25} color={color.primary.font1} />
    </TouchableOpacity>
  );
}
