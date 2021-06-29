import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { Spacer } from '../spacer/Spacer';
import { CompactRestaurantInfo } from '../restaurant/CompactInfoCard.component';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites }) => {
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position='left' size='medium'>
              <CompactRestaurantInfo restaurant={restaurant} />
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
