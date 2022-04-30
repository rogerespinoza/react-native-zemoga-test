import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';
import StarIcon from 'react-native-vector-icons/AntDesign';

import {styles} from './HeaderUserDetails.styles';
import {color} from '../../styles/index';

export default function HeaderUserDetails({navigation, ...props}) {
  const insets = useSafeAreaInsets();

  // console.log(props);

  const onNavigationBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_title}>Description</Text>
      <Text style={styles.text_description}>
        sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit sunt aut facere sunt aut facere sunt aut facere repellat
        provident occaecati excepturi optio reprehenderit sunt aut facere sunt
        aut facere sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit sunt aut facere sunt aut facere
      </Text>
      <Text style={styles.text_title}>User</Text>
      <View style={styles.row}>
        <Text style={styles.text_data_key}>User</Text>
        <Text style={styles.text_data_value}>User</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text_data_key}>User</Text>
        <Text style={styles.text_data_value}>User</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text_data_key}>User</Text>
        <Text style={styles.text_data_value}>User</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text_data_key}>User</Text>
        <Text style={styles.text_data_value}>User</Text>
      </View>
      <View style={styles.separator}>
        <Text style={styles.text_subtitle}>Comments</Text>
      </View>

      {/* <View
        style={{
          ...styles.boxTop,
          marginTop: insets.top,
        }}>
        <View style={styles.boxTop_column1}>
          <TouchableOpacity onPress={onNavigationBack}>
            <ArrowIcon
              name={'chevron-left'}
              size={25}
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
              size={25}
              color={false ? '#a6a659' : color.primary.font1}
              style={styles.boxTop_column1_icon2}
            />
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}
