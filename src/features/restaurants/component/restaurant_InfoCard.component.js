import React from 'react';
import { Card, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { View } from 'react-native';

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.suheading};
  padding: ${(props) => props.theme.space[1]};
`;

const Section = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
const Row = styled.View`
  flex-direction: row;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Sushi Town',
    icon,
    photos = ['https://picsum.photos/400/300'],
    address = 'Fukushima umamoto town',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Row>
            {ratingArray.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Row>
          <Row>{isOpenNow && <SvgXml xml={open} height={20} width={30} />}</Row>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
