import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const resultTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  console.log('5');
  return camelize(mappedResults);
};

// export const resultTransform = ({ results = [] }) => {
//   const mappedResult = results.map((restaraunt) => {
//     restaraunt.photos = restaraunt.photos.map((item) => {
//       return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
//     });
//     return {
//       ...restaraunt,
//       isOpenNow: restaraunt.opening_hours && restaraunt.opening_hours.open_now,
//       isClosedTemporarily: restaraunt.business_status === 'CLOSED_TEMPORARILY',
//     };
//   });
//   console.log('5');
//   return camelize(mappedResults);
// };
