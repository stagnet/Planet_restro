import React, { useContext } from 'react';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourite, removeToFavourite } =
    useContext(FavouritesContext);

  const isFavourites = favourites.find((r) => r.placeId === restaurant.placeId);
  // console.log('favourites', favourites.length);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourites
          ? addToFavourite(restaurant)
          : removeToFavourite(restaurant)
      }
    >
      <AntDesign
        name={isFavourites ? 'heart' : 'hearto'}
        size={24}
        color={isFavourites ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
