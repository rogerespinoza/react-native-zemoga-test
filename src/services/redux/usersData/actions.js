import {usersDataTypes} from '../root_actions';

export const userDataUpdate = payload => ({
  type: usersDataTypes.USERS_DATA_UPDATE,
  payload,
});

export const userDataTry = () => ({
  type: usersDataTypes.USERS_DATA_TRY,
});
