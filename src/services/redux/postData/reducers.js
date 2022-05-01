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

      return {
        ...state,
        posts: postsAux,
      };

    case postDataTypes.POST_DATA_ADD_FAVORITE:
      const postsAddFavorite = state.posts.map(item => {
        if (item.id == action.payload) {
          return {
            ...item,
            favorite: true,
          };
        } else return item;
      });
      const item = state.posts.find(item => item.id == action.payload);
      const postsFavorite = postsAddFavorite.filter(
        item => item.favorite == true,
      );
      const postsNoFavorite = postsAddFavorite.filter(
        item => item.favorite != true,
      );
      const postsNewOrder = [...postsFavorite, ...postsNoFavorite];

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
            favorite: false,
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
