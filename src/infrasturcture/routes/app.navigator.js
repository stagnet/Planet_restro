import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text, Button, Alert } from 'react-native';
import { RestaurantsNavigator } from './restaurants.navigator';
import { SafeArea } from '../../utils/SafeArea/safeArea.component';
import { MapScreen } from '../../features/Maps/screen/map.screen';
import { AuthenticationContext } from '../../services/authentication/auth.context';
import { RestaruantsContextProvider } from '../../services/restaurant/restarunt.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';

const BottomTab = createBottomTabNavigator();
const TAB_ICONS = {
  Restaurants: 'md-restaurant',
  Settings: 'md-settings',
  Maps: 'md-map',
};

const fetchData = () => {
  fetch('https://api.etherapypro.com/data', { method: 'GET' })
    .then((response) => {
      response.json().then((json) => {
        console.log(json);
      });
      // console.log({ res: response.json().then((json) => console.log(json)) });
    })
    .catch((error) => console.log(error));
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>settings page</Text>
      <Button title='Api call' onPress={fetchData} />
      <Button title='Logout' onPress={() => onLogout()} />
    </SafeArea>
  );
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
            <BottomTab.Screen name='Settings' component={Settings} />
            <BottomTab.Screen name='Maps' component={MapScreen} />
          </BottomTab.Navigator>
        </RestaruantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
