import {StyleSheet} from 'react-native';
import {color} from '../../styles/index';

export const styles = StyleSheet.create({
  button_flotant: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: color.primary.background3,
    bottom: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
