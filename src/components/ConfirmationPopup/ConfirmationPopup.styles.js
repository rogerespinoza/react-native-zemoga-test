import {StyleSheet} from 'react-native';
import {color, size} from '../../styles/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27303788',
  },
  backgroundButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMessage: {
    height: size.width * 0.45,
    width: size.width * 0.6,
    borderRadius: 15,
    backgroundColor: color.primary.background1,
  },
  boxMessage_row1: {
    flex: 6,
    justifyContent: 'center',
  },
  boxMessage_row1_text: {
    fontSize: size.font.sz8,
    width: size.width * 0.4,
    textAlign: 'center',
    alignSelf: 'center',
    color: color.primary.font1,
  },
  boxMessage_row2: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxMessage_row2_text: {
    fontSize: size.font.sz8,
    textAlign: 'center',
    alignSelf: 'center',
    color: color.primary.font1,
  },
});
