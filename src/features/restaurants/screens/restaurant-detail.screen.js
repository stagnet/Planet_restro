import React, { useState } from 'react';
import { RestaurantInfoCard } from '../component/restaurant_InfoCard.component';
import { SafeArea } from '../../../utils/SafeArea/safeArea.component';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

export const RestaurantDetailScreen = (props) => {
  const { restaurant } = props.route.params;
  const [breakfastExpand, setBreakfastExpand] = useState(false);
  const [lunchExpand, setLunchExpand] = useState(false);
  const [dinnerExpand, setDinnerExpand] = useState(false);
  const [drinksExpand, setDrinksExpand] = useState(false);
  const [sweetDishExpand, setSweetDishExpand] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        {/*//*  breakfast */}
        <List.Accordion
          title='Breakfast'
          left={(props) => <List.Icon {...props} icon='bread-slice' />}
          expanded={breakfastExpand}
          onPress={() => setBreakfastExpand(!breakfastExpand)}
        >
          <List.Item title='Grilled kippers' />
          <List.Item title='Freshly baked croissants' />
          <List.Item title='Omelette' />
        </List.Accordion>

        {/* //* lunch */}
        <List.Accordion
          title='Lunch'
          left={(props) => <List.Icon {...props} icon='hamburger' />}
          expanded={lunchExpand}
          onPress={() => setLunchExpand(!lunchExpand)}
        >
          <List.Item title='Mermaid Veggie Bowl ' />
          <List.Item title='Double Grilled Cheese ' />
          <List.Item title='Quinoa Salad ' />
        </List.Accordion>

        {/* //* dinner  */}
        <List.Accordion
          title='Dinner'
          left={(props) => <List.Icon {...props} icon='food-variant' />}
          expanded={dinnerExpand}
          onPress={() => setDinnerExpand(!dinnerExpand)}
        >
          <List.Item title='One-Pan Roasted Chicken with Carrots' />
          <List.Item title='Ravioli Lasagna' />
          <List.Item title='Cacio e Pepe' />
        </List.Accordion>

        {/* //* dirnks */}
        <List.Accordion
          title='Drinks'
          left={(props) => <List.Icon {...props} icon='cup' />}
          expanded={drinksExpand}
          onPress={() => setDrinksExpand(!drinksExpand)}
        >
          <List.Item title='Tart Apple-Ginger Shrub' />
          <List.Item title='Cold-brewed coffee' />
          <List.Item title='Slow Cooker Chai' />
          <List.Item title='Diet Coke' />
          <List.Item title='espresso' />
          <List.Item title='Modelo' />
        </List.Accordion>

        {/* //* sweets */}
        <List.Accordion
          title='Sweets'
          left={(props) => <List.Icon {...props} icon='cupcake' />}
          expanded={sweetDishExpand}
          onPress={() => setSweetDishExpand(!sweetDishExpand)}
        >
          <List.Item title='Muffins with cheese' />
          <List.Item title='Pudding' />
          <List.Item title='chesse moose' />
          <List.Item title='Black forest(eggless)' />
          <List.Item title='pineapple chesse cake' />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
