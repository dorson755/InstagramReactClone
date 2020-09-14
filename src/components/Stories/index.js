import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';

import styles from './styles';

const data = [
  {
    imageUri:
      'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
    name: 'Jack',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
    name: 'Jill',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
    name: 'Jimmy',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
    name: 'John',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
    name: 'Jemima',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
    name: 'Jared',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
    name: 'Jake',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/5008376/pexels-photo-5008376.jpeg',
    name: 'Jerry',
  },
];

const Stories = () => (
  <FlatList
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
  />
);

export default Stories;
