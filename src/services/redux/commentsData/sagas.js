import {put, take, race, call, select} from 'redux-saga/effects';
import placeholderData from '../../api/placeholderApi';
import {commentsDataTypes} from '../root_actions';
const getCommentsData = ({commentsData}) => commentsData.comments;

function* tryGetCommentsData(id) {
  try {
    const response = yield placeholderData.get(`/posts/${id}/comments`);
    const data = response.data;
    const commentsCurrentState = yield select(getCommentsData);
    const dataFusion = [...commentsCurrentState, ...data];
    const dataFilter = dataFusion.filter((item, index) => {
      const ver = dataFusion.findIndex(el => el.id == item.id);
      if (ver == index) return true;
    });

    yield put({
      type: commentsDataTypes.COMMENTS_DATA_SUCCESS,
      payload: {
        comments: dataFilter,
      },
    });
  } catch (error) {
    yield put({type: commentsDataTypes.COMMENTS_DATA_FAILED});
  }
}

export function* watchCommentsData() {
  try {
    while (true) {
      const {payload} = yield take(commentsDataTypes.COMMENTS_DATA_TRY);
      yield race([
        call(tryGetCommentsData, payload),
        take(commentsDataTypes.COMMENTS_DATA_STOP),
      ]);
    }
  } finally {
    console.log('|| counter stop ||');
  }
}
