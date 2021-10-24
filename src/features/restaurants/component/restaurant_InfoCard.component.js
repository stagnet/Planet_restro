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
  Icon,
  Section,
} from '../component/restaurant_infoCard.styles';
import { Favourite } from '../../../components/favourites/favourite.component';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Sushi Town',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://picsum.photos/400/300'],
    address = 'Fukushima umamoto town',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  // * rendering nuber of star on the basis of rating....
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant='lable'>{name}</Text>
        <Section>
          <Row>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                height={20}
                width={20}
              />
            ))}
          </Row>
          {isClosedTemporarily && (
            <Text variant='error'>Closed Temporarily</Text>
          )}

          <Row>
            <Spacer position='left' size='large'>
              {isOpenNow && <SvgXml xml={open} height={20} width={30} />}
            </Spacer>
            <Spacer position='left' size='large'>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </Row>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
