import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import {
  restaurantsRequest,
  resultTransform,
} from '../../services/restaurant/restaraunt.service';

import { LocationContext } from '../location/location.context';

//  todo.. STEP1 - create context component
// ? create global context ....
export const RestaruantsContext = createContext();

export const RestaruantsContextProvider = ({ children }) => {
  const [restarauntsData, setRestaruantsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaraunts = (loc) => {
    console.log('1');
    setIsLoading(true);
    console.log('2');
    setRestaruantsData([]);
    console.log('3');
    setTimeout(() => {
      console.log('4');
      restaurantsRequest(loc)
        .then(resultTransform)
        .then((response) => {
          // console.log('response', typeof response, response);
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
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString);
      retrieveRestaraunts(locationString);
    }
  }, [location]);

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
