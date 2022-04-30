import {Dimensions, StatusBar, Platform} from 'react-native';

export const {width, height} = Dimensions.get('screen');

export const config = {
  statusBarHeight: StatusBar.currentHeight,
  platform: Platform.OS,
};

const scale1 = width * 0.012;
export const font = {
  sz1: 8 + scale1,
  sz2: 9 + scale1,
  sz3: 10 + scale1,
  sz4: 11 + scale1,
  sz5: 12 + scale1,
  sz6: 13 + scale1,
  sz7: 14 + scale1,
  sz8: 15 + scale1,
  sz9: 17 + scale1,
  sz10: 18 + scale1,
  sz12: 19 + scale1,
  sz13: 22 + scale1,
  sz14: 26 + scale1,
  sz16: 34 + scale1,
  sz17: 40 + scale1,
  sz19: 50 + scale1,
};
