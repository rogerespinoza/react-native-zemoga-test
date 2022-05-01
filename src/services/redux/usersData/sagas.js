import {put, takeEvery} from 'redux-saga/effects';
import placeholderData from '../../api/placeholderApi';
import {usersDataTypes} from '../root_actions';

function* tryGetUsersData() {
  try {
    const response = yield placeholderData.get('/users');
    const data = response.data;

    yield put({
      type: usersDataTypes.USERS_DATA_SUCCESS,
      payload: {
        users: data,
      },
    });
  } catch (error) {
    yield put({type: usersDataTypes.USERS_DATA_FAILED});
  }
}

export function* watchUserData() {
  yield takeEvery(usersDataTypes.USERS_DATA_TRY, tryGetUsersData);
}
