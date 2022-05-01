import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './HeaderUserDetails.styles';

export default function HeaderUserDetails({navigation, params}) {
  const {user, body} = params;

  const onNavigationBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_title}>Description</Text>
      <Text style={styles.text_description}>{body}</Text>
      <Text style={styles.text_title}>User</Text>
      <View style={styles.row}>
        <Text style={styles.text_data_key}>Name</Text>
        <Text style={styles.text_data_value}>{user.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text_data_key}>Email</Text>
        <Text style={styles.text_data_value}>{user.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text_data_key}>Phone</Text>
        <Text style={styles.text_data_value}>{user.phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text_data_key}>Website</Text>
        <Text style={styles.text_data_value}>{user.website}</Text>
      </View>
      <View style={styles.separator}>
        <Text style={styles.text_subtitle}>Comments</Text>
      </View>
    </View>
  );
}
