import {View, Text, Animated, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './MaterialTopBar.styles';

export default function MaterialTopBar({state, position, navigation}) {
  const insets = useSafeAreaInsets();

  const onNavigate = route => navigation.navigate(route);

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
        {state.routeNames.map((item, index) => {
          const {opacity1, opacity2} = handleAnimation(index);
          return (
            <TouchableOpacity
              onPress={() => onNavigate(item)}
              key={index}
              style={styles.boxBottom_button}>
              <Animated.Text
                style={{...styles.boxBottom_button_text, opacity: opacity1}}>
                {item}
              </Animated.Text>
              <Animated.View
                style={{...styles.boxBottom_button_line, opacity: opacity2}}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
