import styled from 'styled-components/native';
import { FlatList } from 'react-native';

//todo: using below technique we can apply styles to the internal element of a parent component....
export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;
