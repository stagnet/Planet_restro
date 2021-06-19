import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { RestaurantsNavigator } from './restaurants.navigator';
import { SafeArea } from '../../utils/SafeArea/safeArea.component';
import { MapScreen } from '../../features/Maps/screen/map.screen';

const BottomTab = createBottomTabNavigator();
const TAB_ICONS = {
  Restaurants: 'md-restaurant',
  Settings: 'md-settings',
  Maps: 'md-map',
};

const Settings = () => (
  <SafeArea>
    <Text>settings page</Text>
  </SafeArea>
);

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
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={createScreenOption}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <BottomTab.Screen name='Restaurants' component={RestaurantsNavigator} />
        <BottomTab.Screen name='Settings' component={Settings} />
        <BottomTab.Screen name='Maps' component={MapScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
