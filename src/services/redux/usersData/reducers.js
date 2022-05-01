import {usersDataTypes} from '../root_actions';

export const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case usersDataTypes.USERS_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case usersDataTypes.USERS_DATA_TRY:
      return {
        ...state,
      };
    case usersDataTypes.USERS_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case usersDataTypes.USERS_DATA_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
