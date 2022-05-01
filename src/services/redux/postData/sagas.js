import {put, takeEvery, select} from 'redux-saga/effects';
import placeholderData from '../../api/placeholderApi';
import {postDataTypes} from '../root_actions';
const getFavoriteData = ({postData}) => postData.favorites;

function* tryGetPostData() {
  try {
    const response = yield placeholderData.get('/posts');
    const data = response.data;
    const favoritesData = yield select(getFavoriteData);
    const dataPostFilter = data.filter(item => {
      const ver = favoritesData.some(elem => elem.id == item.id);
      if (!ver) return true;
    });
    const unReadedId = dataPostFilter.map(item => item.id);
    const dataResult = [...favoritesData, ...dataPostFilter];
    yield put({
      type: postDataTypes.POST_DATA_SUCCESS,
      payload: {
        posts: dataResult,
        unreaded: unReadedId,
      },
    });
  } catch (error) {
    yield put({type: postDataTypes.POST_DATA_FAILED});
  }
}

export function* watchPostData() {
  yield takeEvery(postDataTypes.POST_DATA_TRY, tryGetPostData);
}
