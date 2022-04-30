import {StyleSheet} from 'react-native';
import {color, size} from '../../styles/index';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary.background1,
  },
  boxTop: {
    height: size.width * 0.012 + 40,
    justifyContent: 'center',
    marginLeft: size.width * 0.04,
  },
  boxTop_text: {
    fontSize: size.font.sz13,
    fontSize: size.font.sz10,
    fontWeight: 'bold',
    color: color.primary.font1,
  },
  boxBottom: {
    height: size.width * 0.012 + 30,
    alignItems: 'flex-end',
    paddingHorizontal: size.width * 0.04,
    flexDirection: 'row',
  },
  boxBottom_column1: {
    flex: 1,
    flexDirection: 'row',
  },
  boxBottom_column2: {
    flex: 1,
    height: size.width * 0.012 + 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  boxBottom_button: {
    marginRight: size.width * 0.04,
    marginBottom: 2,
  },
  boxBottom_button_text: {
    fontSize: size.font.sz7,
    color: color.primary.font1,
    marginBottom: 1,
  },
  boxBottom_button_line: {
    height: 2,
    backgroundColor: color.primary.font1,
  },
  boxBottom_icon: {
    marginRight: size.width * 0.04,
    marginBottom: 4,
  },
});
