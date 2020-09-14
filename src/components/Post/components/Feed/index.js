import React from 'react';
import {FlatList} from 'react-native';
import Post from '../../../Post';
import Stories from '../../../Stories';

const data = [
  {
    user: {
      imageUri:
        'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
      name: 'King',
    },
    imageUri:
      'https://images.pexels.com/photos/40975/baby-boy-child-cuddle-40975.jpeg',
    caption: 'Father and son #parenthood',
    likesCount: 23535,
    postedAt: '7 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
      name: 'King',
    },
    imageUri:
      'https://images.pexels.com/photos/40975/baby-boy-child-cuddle-40975.jpeg',
    caption: 'Father and son #parenthood',
    likesCount: 23535,
    postedAt: '7 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
      name: 'King',
    },
    imageUri:
      'https://images.pexels.com/photos/40975/baby-boy-child-cuddle-40975.jpeg',
    caption: 'Father and son #parenthood',
    likesCount: 23535,
    postedAt: '7 minutes ago',
  },
];

const Feed = () => (
  <FlatList
    data={data}
    renderItem={({item}) => <Post post={item} />}
    ListHeaderComponent={Stories}
  />
);

export default Feed;
