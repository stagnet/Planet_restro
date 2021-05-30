import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const resultTransform = ({ results = [] }) => {
  const mappedResult = results.map((restaraunt) => {
    restaraunt.photos = restaraunt.photos.map((item) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaraunt,
      isOpenNow: restaraunt.opening_hours && restaraunt.opening_hours.open_now,
      isClosedTemporarily: restaraunt.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResult);
};

// restaurantsRequest()
//   .then(resultTransform)
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err);
//   });
