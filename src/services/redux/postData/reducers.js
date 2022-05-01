import {postDataTypes} from '../root_actions';

export const initialState = {
  posts: [],
  unreaded: [],
  favorites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case postDataTypes.POST_DATA_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    case postDataTypes.POST_DATA_DISABLE_UNREAD:
      const postsAux = state.posts.map(item => {
        if (item.id == action.payload) {
          return {
            ...item,
            unReaded: false,
          };
        } else return item;
      });

      const unreadFilter = state.unreaded.filter(
        item => item != action.payload,
      );

      return {
        ...state,
        unreaded: unreadFilter,
      };

    case postDataTypes.POST_DATA_ADD_FAVORITE:
      const item = state.posts.find(item => item.id == action.payload);
      const postsWithourItem = state.posts.filter(
        item => item.id != action.payload,
      );
      const postsNewOrder = [item, ...postsWithourItem];

      return {
        ...state,
        posts: postsNewOrder,
        favorites: [...state.favorites, item],
      };

    case postDataTypes.POST_DATA_HIDE_FAVORITE:
      const favoritesHideItem = state.favorites.filter(
        item => item.id != action.payload,
      );
      const postsHideFavorite = state.posts.map(item => {
        if (item.id == action.payload) {
          return {
            ...item,
          };
        } else return item;
      });

      return {
        ...state,
        posts: postsHideFavorite,
        favorites: favoritesHideItem,
      };

    case postDataTypes.POST_DATA_DELETE_ITEM:
      const postsWithoutItem = state.posts.filter(
        item => item.id != action.payload,
      );
      return {
        ...state,
        posts: postsWithoutItem,
      };

    case postDataTypes.POST_DATA_TRY:
      return {
        ...state,
      };
    case postDataTypes.POST_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case postDataTypes.POST_DATA_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
