import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';
import StarIcon from 'react-native-vector-icons/AntDesign';

import {styles} from './StackBar.styles';
import {color} from '../../styles/index';

export default function StackBar({navigation, ...props}) {
  const insets = useSafeAreaInsets();

  // console.log(props);

  const onNavigationBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.boxTop,
          marginTop: insets.top,
        }}>
        <View style={styles.boxTop_column1}>
          <TouchableOpacity onPress={onNavigationBack}>
            <ArrowIcon
              name={'chevron-left'}
              size={22}
              color={color.primary.font1}
              style={styles.boxTop_column1_icon1}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxTop_column2}>
          <Text style={styles.boxTop_text}>Posts</Text>
        </View>
        <View style={styles.boxTop_column1}>
          <TouchableOpacity>
            <StarIcon
              name={false ? 'star' : 'staro'}
              size={22}
              color={false ? '#a6a659' : color.primary.font1}
              style={styles.boxTop_column1_icon2}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
