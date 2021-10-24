import styled from 'styled-components/native';
import { Card, Paragraph } from 'react-native-paper';
import { View } from 'react-native';

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const Address = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.suheading};
  padding: ${(props) => props.theme.space[1]};
`;

export const Section = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
export const Row = styled.View`
  flex-direction: row;
`;
