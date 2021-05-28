import React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, FlatList } from 'react-native';
import { RestaurantInfoCard } from '../component/restaurant_InfoCard.component';
import { Spacer } from '../../../components/spacer/Spacer';
import styled from 'styled-components/native';
import { SafeArea } from '../../../utils/SafeArea/safeArea.component';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

//todo: using below technique we can apply styles to the internal element of a parent component....
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      {/* searchBar */}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      {/* restaurant list */}

      <RestaurantList
        data={[
          { id: '1' },
          { id: '2' },
          { id: '3' },
          { id: '4' },
          { id: '5' },
          { id: '6' },
          { id: '7' },
        ]}
        renderItem={() => (
          <>
            <Spacer position='bottom' size='large'>
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.id}
        key={(item) => item.id}
      />
    </SafeArea>
  );
};
