import React from 'react';
import { Searchbar } from 'react-native-paper';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';
import { RestaurantInfoCard } from '../component/restaurant_InfoCard.component';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      {/* searchBar */}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      {/* restaurant list */}
      <RestaurantList>
        <RestaurantInfoCard />
      </RestaurantList>
    </SafeArea>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     padding: 16,
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//   },
// });
