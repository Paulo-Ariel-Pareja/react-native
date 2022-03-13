import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";


export default ({navigation}) => {
  const body = navigation.getParam('body');
  const title = navigation.getParam('title');
  const name = navigation.getParam('name');
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
