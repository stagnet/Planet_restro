import React from 'react';
import { CompactRestaurantInfo } from '../../../components/restaurant/CompactInfoCard.component';

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
