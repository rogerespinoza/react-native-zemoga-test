import {commentsDataTypes} from '../root_actions';

export const initialState = {
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case commentsDataTypes.COMMENTS_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case commentsDataTypes.COMMENTS_DATA_TRY:
      return {
        ...state,
      };
    case commentsDataTypes.COMMENTS_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case commentsDataTypes.COMMENTS_DATA_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
