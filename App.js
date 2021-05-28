import React from 'react';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrasturcture/theme/index';
import { Text } from 'react-native-paper';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/utils/SafeArea/safeArea.component';

const BottomTab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>settings page</Text>
  </SafeArea>
);

const Maps = () => (
  <SafeArea>
    <Text>map page</Text>
  </SafeArea>
);

export default function App() {
  const [oswald] = useOswald({ Oswald_400Regular });
  const [lato] = useLato({ Lato_400Regular });

  if (!oswald || !lato) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <BottomTab.Navigator>
            <BottomTab.Screen name='Restaurants' component={RestaurantScreen} />
            <BottomTab.Screen name='Settings' component={Settings} />
            <BottomTab.Screen name='Maps' component={Maps} />
          </BottomTab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}
