import React, {useCallback, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from './AllPosts.styles';
import {size} from '../../styles/index';
import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import PostItem from '../../components/PostItem/PostItem';
import Fill from '../../components/Fill/Fill';
import ConfirmationPopup from '../../components/ConfirmationPopup/ConfirmationPopup';
import ButtonFlotant from '../../components/ButtonFlotant/ButtonFlotant';
import {
  postDataDeleteItem,
  postDataDisableUnread,
  postDataUpdate,
} from '../../services/redux/postData/actions';
import {appDataConfigUpdate} from '../../services/redux/appDataConfig/actions';

export default function AllPosts({navigation}) {
  const all = useSelector(({appDataConfig}) => appDataConfig.all);
  const favorites = useSelector(({appDataConfig}) => appDataConfig.favorites);
  const posts = useSelector(({postData}) => postData.posts);
  const users = useSelector(({usersData}) => usersData.users);
  const [isVibleConfirmation, setIsVibleConfirmation] = useState(false);
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
    dispatch(postDataDisableUnread(id));
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
          ...favorites,
          edit: false,
        },
      }),
    );
  };

  const onDeletePosts = () => {
    dispatch(postDataUpdate({posts: [], favorites: []}));
    setIsVibleConfirmation(false);
  };

  const onDeleteItem = ({item}) => {
    const {id} = item;
    dispatch(postDataDeleteItem(id));
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
          onPress2={onDeletePosts}
        />
        <FlatList
          data={posts}
          renderItem={props => (
            <PostItem
              onPress1={() => onNavigateToUserDetails(props)}
              onPress2={() => onDeleteItem(props)}
              screen="all"
              edit={all.edit}
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
