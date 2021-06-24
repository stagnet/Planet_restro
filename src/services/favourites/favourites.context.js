import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourite] = useState([]);

  const add = (restaurant) => {
    setFavourite([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourite = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourite(newFavourite);
  };

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
