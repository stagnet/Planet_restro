import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrasturcture/theme/index';
import firebase from 'firebase';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';

import { RestaruantsContextProvider } from './src/services/restaurant/restarunt.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';

import { Navigation } from './src/infrasturcture/routes/index';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBKUx3geh9hiXedTIh_u_S-SK9yAba5w4A',

  authDomain: 'planetrestro.firebaseapp.com',

  projectId: 'planetrestro',

  storageBucket: 'planetrestro.appspot.com',

  messagingSenderId: '841678618108',

  appId: '1:841678618108:web:3cd223abac77a785ac0679',

  measurementId: 'G-HRM45VXJBK',
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [oswald] = useOswald({ Oswald_400Regular });
  const [lato] = useLato({ Lato_400Regular });

  if (!oswald || !lato) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* //todo; STEP2 - import it to App level globally... */}
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaruantsContextProvider>
              <Navigation />
            </RestaruantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>

        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}
