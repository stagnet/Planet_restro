import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/Maps/screen/map.screen';
import { RestaruantsContextProvider } from '../../services/restaurant/restarunt.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { SettingsNavigatior } from '../routes/settings.navigator';
const BottomTab = createBottomTabNavigator();
const TAB_ICONS = {
  Restaurants: 'md-restaurant',
  Settings: 'md-settings',
  Maps: 'md-map',
};

const tabBarIcon =
  (iconName) =>
  ({ size, color }) =>
    <Ionicons name={iconName} size={size} color={color} />;

const createScreenOption = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaruantsContextProvider>
          <BottomTab.Navigator
            screenOptions={createScreenOption}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <BottomTab.Screen
              name='Restaurants'
              component={RestaurantsNavigator}
            />
            <BottomTab.Screen name='Settings' component={SettingsNavigatior} />
            <BottomTab.Screen name='Maps' component={MapScreen} />
          </BottomTab.Navigator>
        </RestaruantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
