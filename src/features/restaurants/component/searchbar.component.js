import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searckKey, setSearchKey] = useState(keyword);

  useEffect(() => {
    setSearchKey(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggled}
        placeholder='Search for a location'
        value={searckKey}
        onSubmitEditing={() => {
          search(searckKey);
        }}
        onChangeText={(text) => {
          setSearchKey(text);
        }}
      />
    </SearchContainer>
  );
};
