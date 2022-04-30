import {StyleSheet} from 'react-native';
import {color, size} from '../../styles/index';
export const styles = StyleSheet.create({
  container: {
    width: size.width,
  },
  text_title: {
    fontSize: size.font.sz9,
    fontWeight: 'bold',
    color: color.primary.font1,
    marginTop: size.width * 0.05,
    marginLeft: size.width * 0.04,
  },
  text_description: {
    marginTop: size.width * 0.02,
    fontSize: size.font.sz3,
    color: color.primary.font1,
    marginLeft: size.width * 0.04,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: size.width * 0.02,
  },
  text_data_key: {
    fontSize: size.font.sz3,
    fontWeight: 'bold',
    color: color.primary.font1,
    marginLeft: size.width * 0.04,
  },
  text_data_value: {
    fontSize: size.font.sz3,
    color: color.primary.font1,
    marginLeft: size.width * 0.05,
  },

  separator: {
    marginTop: size.width * 0.05,
    height: size.width * 0.09,
    backgroundColor: color.primary.background1 + 'aa',
    justifyContent: 'center',
  },
  text_subtitle: {
    fontSize: size.font.sz9,
    fontWeight: 'bold',
    color: color.primary.font1,
    marginLeft: size.width * 0.04,
  },
});
