import {View, Text, Animated, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import EditIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from './MaterialTopBar.styles';
import {color} from '../../styles/index';
import {appDataConfigUpdate} from '../../services/redux/appDataConfig/actions';
import {postDataTry} from '../../services/redux/postData/actions';

export default function MaterialTopBar({state, position, navigation}) {
  const {index, routeNames} = state;
  const all = useSelector(({appDataConfig}) => appDataConfig.all);
  const favorites = useSelector(({appDataConfig}) => appDataConfig.favorites);
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  useEffect(() => {
    disableEdit();
  }, [index]);

  const onNavigate = route => navigation.navigate(route);

  const getStateButtonEdit = () => {
    if (index == 0) return all.edit;
    else return favorites.edit;
  };

  const handleEditFunction = () => {
    if (index == 0) {
      dispatch(
        appDataConfigUpdate({
          all: {
            ...all,
            edit: !all.edit,
          },
        }),
      );
    } else {
      dispatch(
        appDataConfigUpdate({
          favorites: {
            ...favorites,
            edit: !favorites.edit,
          },
        }),
      );
    }
  };

  const disableEdit = () => {
    if (all.edit || favorites.edit)
      dispatch(
        appDataConfigUpdate({
          all: {
            ...all,
            edit: false,
          },
          favorites: {
            ...favorites,
            edit: false,
          },
        }),
      );
  };

  const getDataPost = () => {
    dispatch(postDataTry());
  };

  const handleAnimation = index => {
    const inputRange1 = state.routes.map((_, i) => i);
    const opacity1 = position.interpolate({
      inputRange: inputRange1,
      outputRange: inputRange1.map(i => (i === index ? 1 : 0.5)),
    });
    const opacity2 = position.interpolate({
      inputRange: inputRange1,
      outputRange: inputRange1.map(i => (i === index ? 1 : 0)),
    });
    return {opacity1, opacity2};
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.boxTop,
          marginTop: insets.top,
        }}>
        <Text style={styles.boxTop_text}>Posts</Text>
      </View>
      <View style={styles.boxBottom}>
        <View style={styles.boxBottom_column1}>
          {routeNames.map((item, index) => {
            const {opacity1, opacity2} = handleAnimation(index);
            return (
              <TouchableOpacity
                onPress={() => onNavigate(item)}
                key={index}
                style={styles.boxBottom_button}>
                <Animated.Text
                  style={{
                    ...styles.boxBottom_button_text,
                    opacity: opacity1,
                  }}>
                  {item}
                </Animated.Text>
                <Animated.View
                  style={{...styles.boxBottom_button_line, opacity: opacity2}}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.boxBottom_column2}>
          {index == 0 && (
            <TouchableOpacity onPress={getDataPost}>
              <EditIcon
                name={'reload'}
                size={22}
                color={color.primary.font1}
                style={styles.boxBottom_icon}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleEditFunction}>
            <EditIcon
              name={
                getStateButtonEdit()
                  ? 'application-edit'
                  : 'application-edit-outline'
              }
              size={21}
              color={color.primary.font1}
              style={styles.boxBottom_icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
