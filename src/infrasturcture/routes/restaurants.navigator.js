import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantScreen } from '../../features/restaurants/screens/restaurant.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode='none'
      screenOptions={{ ...TransitionPresets.ModalTransition }}
    >
      <RestaurantStack.Screen name='Restaurant' component={RestaurantScreen} />
      <RestaurantStack.Screen
        name='ReastaurantDetails'
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
