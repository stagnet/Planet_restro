import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { RestaurantInfo } from "../component/restaurant_Info.component";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* searchBar */}
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
