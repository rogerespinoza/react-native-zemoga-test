import {appDataConfigTypes} from '../root_actions';

export const initialState = {
  all: {
    edit: false,
  },
  favorites: {
    edit: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appDataConfigTypes.APP_DATA_CONFIG_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
