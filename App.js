import React from 'react';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrasturcture/theme/index';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';

export default function App() {
  const [oswald] = useOswald({ Oswald_400Regular });
  const [lato] = useLato({ Lato_400Regular });

  if (!oswald || !lato) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}
