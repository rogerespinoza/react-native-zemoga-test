import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';
import StarIcon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from './StackBar.styles';
import {color} from '../../styles/index';
import {
  postDataAddFavorite,
  postDataHideFavorite,
} from '../../services/redux/postData/actions';

export default function StackBar({navigation, route, ...props}) {
  const insets = useSafeAreaInsets();
  const posts = useSelector(({postData}) => postData.posts);
  const favorites = useSelector(({postData}) => postData.favorites);
  const {params} = route;
  const {id} = params;
  const dispatch = useDispatch();

  const onNavigationBack = () => {
    navigation.goBack();
  };

  const getStateFavorite = () => {
    return favorites.some(item => item.id == id);
  };

  const onChangeStateFavotite = () => {
    if (getStateFavorite()) {
      dispatch(postDataHideFavorite(id));
    } else {
      dispatch(postDataAddFavorite(id));
    }
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
          <TouchableOpacity onPress={onChangeStateFavotite}>
            <StarIcon
              name={getStateFavorite() ? 'star' : 'staro'}
              size={22}
              color={getStateFavorite() ? '#a6a659' : color.primary.font1}
              style={styles.boxTop_column1_icon2}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
