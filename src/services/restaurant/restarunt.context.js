import React, { useState, createContext, useEffect, useMemo } from 'react';
import {
  restaurantsRequest,
  resultTransform,
} from '../../services/restaurant/restaraunt.service';

//  todo.. STEP1 - create context component
// ? create global context ....
export const RestaruantsContext = createContext();

export const RestaruantsContextProvider = ({ children }) => {
  const [restarauntsData, setRestaruantsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaraunts = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(resultTransform)
        .then((response) => {
          setRestaruantsData(response);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1500);
  };

  useEffect(() => {
    retrieveRestaraunts();
  }, []);

  return (
    <RestaruantsContext.Provider
      value={{
        restarauntsData,
        isLoading,
        error,
      }}
    >
      {/* //todo; STEP3 - insert some value to inject it inside other/childern */}
      {children}
    </RestaruantsContext.Provider>
  );
};
