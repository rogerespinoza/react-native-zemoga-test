import React, {useCallback, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from './FavoritePosts.styles';
import {size, color} from '../../styles/index';
import PostItem from '../../components/PostItem/PostItem';
import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import Fill from '../../components/Fill/Fill';
import ConfirmationPopup from '../../components/ConfirmationPopup/ConfirmationPopup';
import ButtonFlotant from '../../components/ButtonFlotant/ButtonFlotant';
import {
  postDataHideFavorite,
  postDataUpdate,
} from '../../services/redux/postData/actions';
import {appDataConfigUpdate} from '../../services/redux/appDataConfig/actions';

export default function FavoritePosts({navigation}) {
  const [isVibleConfirmation, setIsVibleConfirmation] = useState(false);
  const favoritesConfig = useSelector(
    ({appDataConfig}) => appDataConfig.favorites,
  );
  const all = useSelector(({appDataConfig}) => appDataConfig.all);
  const posts = useSelector(({postData}) => postData.posts);
  const favorites = useSelector(({postData}) => postData.favorites);
  const users = useSelector(({usersData}) => usersData.users);
  const dispatch = useDispatch();

  const hideConfirmation = () => {
    setIsVibleConfirmation(false);
  };
  const showConfirmation = () => {
    setIsVibleConfirmation(true);
  };

  const onNavigateToUserDetails = ({item}) => {
    const {id, body} = item;
    const user = users.find(item => item.id == id);
    disableEdit();
    navigation.navigate('UserDetails', {user, id, body});
  };

  const disableEdit = () => {
    dispatch(
      appDataConfigUpdate({
        all: {
          ...all,
          edit: false,
        },
        favorites: {
          ...favoritesConfig,
          edit: false,
        },
      }),
    );
  };

  const onDeleteFavorites = () => {
    const postsFilter = posts.filter(item => item.favorite != true);
    dispatch(postDataUpdate({favorites: [], posts: postsFilter}));
    setIsVibleConfirmation(false);
  };

  const onDeleteItem = ({item}) => {
    const {id} = item;
    dispatch(postDataHideFavorite(id));
  };

  const keyExtractor = useCallback(({id}) => id);
  const getItemLayout = useCallback(
    (_, index) => ({
      length: size.width * 0.12 + 20,
      offset: size.width * 0.12 + 20 * index,
      index,
    }),
    [],
  );

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <ConfirmationPopup
          isVisible={isVibleConfirmation}
          onPress1={hideConfirmation}
          onPress2={onDeleteFavorites}
        />
        <FlatList
          data={favorites}
          renderItem={props => (
            <PostItem
              onPress1={() => onNavigateToUserDetails(props)}
              onPress2={() => onDeleteItem(props)}
              edit={favoritesConfig.edit}
              screen="favorites"
              {...props}
            />
          )}
          keyExtractor={keyExtractor}
          maxToRenderPerBatch={200}
          getItemLayout={getItemLayout}
          ListFooterComponent={<Fill />}
        />
        <ButtonFlotant onPress={showConfirmation} />
      </View>
    </SafeAreaContainer>
  );
}
