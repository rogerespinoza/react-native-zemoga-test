import {StyleSheet} from 'react-native';
import {color} from '../../styles/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary.background2,
  },
  button_delete: {
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
