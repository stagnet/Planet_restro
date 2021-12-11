import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searckKey, setSearchKey] = useState(keyword);

  useEffect(() => {
    setSearchKey(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a location'
        icon='map'
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
