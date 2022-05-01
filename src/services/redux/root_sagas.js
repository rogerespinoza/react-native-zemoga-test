import {all} from 'redux-saga/effects';
import {watchCommentsData} from './commentsData/sagas';

import {watchPostData} from './postData/sagas';
import {watchUserData} from './usersData/sagas';

export default function* rootSaga() {
  yield all([watchPostData(), watchUserData(), watchCommentsData()]);
}
