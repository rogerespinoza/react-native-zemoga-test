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
  box1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 2,
  },
  box2: {
    flex: 20,
  },
  box3: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box4: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box5: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  readSignal: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  text: {
    fontSize: size.font.sz1,
    marginRight: size.width * 0.01,
    color: '#aeaaa7',
    marginTop: size.width * 0.02,
  },
  iconStart: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  buttonClose: {
    height: 20,
    width: 2,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});
