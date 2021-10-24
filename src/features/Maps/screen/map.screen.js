import React, { useState, useContext, useEffect } from 'react';

import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components';
import { Search } from '../component/map.searchbar.component';

import { RestaruantsContext } from '../../../services/restaurant/restarunt.context';
import { LocationContext } from '../../../services/location/location.context';

import { MapCallout } from '../component/map.callout.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restarauntsData } = useContext(RestaruantsContext);
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <View style={{ flex: 1 }}>
      <Search />
      <Map
        mapType='standard'
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.04,
        }}
      >
        {restarauntsData.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                longitude: restaurant.geometry.location.lng,
                latitude: restaurant.geometry.location.lat,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate('ReastaurantDetails', { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </Marker>
          );
        })}
      </Map>
    </View>
  );
};
