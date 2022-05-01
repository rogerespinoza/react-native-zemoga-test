import {postDataTypes} from '../root_actions';

export const postDataUpdate = payload => ({
  type: postDataTypes.POST_DATA_UPDATE,
  payload,
});

export const postDataDeleteItem = payload => ({
  type: postDataTypes.POST_DATA_DELETE_ITEM,
  payload,
});

export const postDataAddFavorite = payload => ({
  type: postDataTypes.POST_DATA_ADD_FAVORITE,
  payload,
});

export const postDataHideFavorite = payload => ({
  type: postDataTypes.POST_DATA_HIDE_FAVORITE,
  payload,
});

export const postDataDisableUnread = payload => ({
  type: postDataTypes.POST_DATA_DISABLE_UNREAD,
  payload,
});

export const postDataTry = () => ({
  type: postDataTypes.POST_DATA_TRY,
});
