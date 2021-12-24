import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/auth.context.js';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourite] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const saveFavourites = async (value, uid) => {
    try {
      const json = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites+${uid}`, json);
    } catch (error) {
      console.error('error storing', error);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites+${uid}`);
      if (value !== null) {
        setFavourite(JSON.parse(value));
      }
    } catch (error) {
      console.log('error loading data', error);
    }
  };

  const add = (restaurant) => {
    setFavourite([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourite = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourite(newFavourite);
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourite: add,
        removeToFavourite: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
