import {combineReducers} from 'redux';
import appDataConfigReducer from './appDataConfig/reducers';
import postDataReducer from './postData/reducers';
import usersDataReducer from './usersData/reducers';

export default rootReducer = combineReducers({
  appDataConfig: appDataConfigReducer,
  postData: postDataReducer,
  usersData: usersDataReducer,
});
