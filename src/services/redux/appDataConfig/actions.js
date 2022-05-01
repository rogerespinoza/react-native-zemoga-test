import {appDataConfigTypes} from '../root_actions';

export const appDataConfigUpdate = payload => ({
  type: appDataConfigTypes.APP_DATA_CONFIG_UPDATE,
  payload,
});
