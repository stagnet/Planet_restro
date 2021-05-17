import React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
