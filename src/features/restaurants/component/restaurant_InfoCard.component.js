import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/Spacer';
import { Text } from '../../../components/typography/text.component';
import {
  RestaurantCard,
  Address,
  Info,
  RestaurantCover,
  Row,
  Section,
} from '../component/restaurant_infoCard.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Sushi Town',
    icon,
    photos = ['https://picsum.photos/400/300'],
    address = 'Fukushima umamoto town',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant='lable'>{name}</Text>
        <Section>
          <Row>
            {ratingArray.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Row>
          {isClosedTemporarily && (
            <Text variant='error'>Closed Temporarily</Text>
          )}

          <Row>
            <Spacer position='left' size='large'>
              {isOpenNow && <SvgXml xml={open} height={20} width={30} />}
            </Spacer>
          </Row>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
