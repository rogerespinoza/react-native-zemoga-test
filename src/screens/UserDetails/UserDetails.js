import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {styles} from './UserDetails.styles';
import {size} from '../../styles/index';
import SafeAreaContainer from '../../components/SafeAreaContainer/SafeAreaContainer';
import HeaderUserDetails from '../../components/HeaderUserDetails/HeaderUserDetails';
import ComentsItem from '../../components/ComentsItem/ComentsItem';

export default function UserDetails({route}) {
  const {params} = route;
  const {user, id} = params;
  const comments = useSelector(({commentsData}) => commentsData.comments);

  if (user == undefined) return null;

  const getCommentsUser = () => {
    const commentsUser = comments.filter(item => item.postId == id);
    return commentsUser;
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
        <FlatList
          data={getCommentsUser()}
          renderItem={ComentsItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          ListHeaderComponent={<HeaderUserDetails params={params} />}
        />
      </View>
    </SafeAreaContainer>
  );
}
