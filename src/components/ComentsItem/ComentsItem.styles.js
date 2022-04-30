import {StyleSheet} from 'react-native';
import {color, size} from '../../styles';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    flexDirection: 'row',
    height: size.width * 0.12 + 20,
    alignSelf: 'center',
    width: '97%',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff33',
  },
  text: {
    fontSize: size.font.sz1,
    marginRight: size.width * 0.01,
    color: '#aeaaa7',
    marginTop: size.width * 0.02,
  },
});
