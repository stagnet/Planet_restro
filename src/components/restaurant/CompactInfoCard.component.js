import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import styled from 'styled-components';
import { Text } from '../typography/text.component';
import WebView from 'react-native-webview';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <TouchableOpacity>
      <Item>
        <Image source={{ uri: restaurant.photos[0] }} />
        <Text center variant='caption' numberOfLines={3}>
          {restaurant.name}
        </Text>
      </Item>
    </TouchableOpacity>
  );
};
