/* eslint-disable prettier/prettier */
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

export const RestaurantsScreen = () => {
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.view}>
      <Text>view</Text>
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  view: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
