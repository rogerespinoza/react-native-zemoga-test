import {StyleSheet} from 'react-native';
import {color, size} from '../../styles/index';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary.background1,
  },
  boxTop: {
    height: size.width * 0.012 + 40,
    width: size.width,
    flexDirection: 'row',
  },
  boxTop_column1: {
    flex: 3,
    backgroundColor: 'red',
  },
  boxTop_column1: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  boxTop_column2: {
    flex: 12,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  boxTop_column1_icon1: {
    alignSelf: 'flex-start',
    marginLeft: size.width * 0.012 + 15,
    marginBottom: 4,
  },

  boxTop_text: {
    fontSize: size.font.sz10,
    fontWeight: 'bold',
    color: color.primary.font1,
    marginBottom: 1,
  },
  boxTop_column1_icon2: {
    alignSelf: 'flex-end',
    marginRight: size.width * 0.012 + 15,
    marginBottom: 4,
  },
});
