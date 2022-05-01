import {commentsDataTypes} from '../root_actions';

export const commentsDataUpdate = payload => ({
  type: commentsDataTypes.COMMENTS_DATA_UPDATE,
  payload,
});

export const commentsDataTry = payload => ({
  type: commentsDataTypes.COMMENTS_DATA_TRY,
  payload,
});
