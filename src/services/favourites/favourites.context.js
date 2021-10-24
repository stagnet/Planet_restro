import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourite] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const json = JSON.stringify(value);
      await AsyncStorage.setItem('@favourites', json);
    } catch (error) {
      console.error('error storing', error);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favourites');
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
    loadFavourites(favourites);
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

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
