import {put, takeEvery} from 'redux-saga/effects';
import placeholderData from '../../api/placeholderApi';
import {postDataTypes} from '../root_actions';

function* tryGetPostData() {
  try {
    const response = yield placeholderData.get('/posts');
    const data = response.data;
    const posts = data.map((item, _) => {
      return {
        ...item,
        unReaded: true,
        favorite: false,
      };
    });
    yield put({
      type: postDataTypes.POST_DATA_SUCCESS,
      payload: {
        posts: posts,
      },
    });
  } catch (error) {
    yield put({type: postDataTypes.POST_DATA_FAILED});
  }
}

export function* watchPostData() {
  yield takeEvery(postDataTypes.POST_DATA_TRY, tryGetPostData);
}
