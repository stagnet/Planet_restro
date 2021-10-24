import React, { useContext, useState } from 'react';
//todo; STEP4 - use the react context inside any component you want using 'useContext'
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { RestaurantInfoCard } from '../component/restaurant_InfoCard.component';
import { Spacer } from '../../../components/spacer/Spacer';
import styled from 'styled-components/native';

import { Search } from '../component/searchbar.component';
import { SafeArea } from '../../../utils/SafeArea/safeArea.component';
import { FavouritesBar } from '../../../components/favourites/favouriteBar.component';

import { RestaruantsContext } from '../../../services/restaurant/restarunt.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

//todo: using below technique we can apply styles to the internal element of a parent component....
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

export const RestaurantScreen = ({ navigation }) => {
  const { restarauntsData, isLoading } = useContext(RestaruantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  // console.log('toggled', isToggled);

  return (
    <SafeArea>
      {isLoading && (
        <View style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <ActivityIndicator
            size='large'
            color='#ff7417'
            animating={true}
            style={{ marginLeft: -20 }}
          />
        </View>
      )}

      {/* searchBar */}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />

      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {/* restaurant list */}

      <RestaurantList
        data={restarauntsData}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ReastaurantDetails', { restaurant: item })
              }
            >
              <Spacer position='bottom' size='large'>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
