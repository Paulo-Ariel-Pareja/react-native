import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";

export default ({navigation}) => {
  const user_id = navigation.getParam('user_id');
  const username = navigation.getParam('name');
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPost(data);
    setLoading(false);
  };

  useEffect(() => {fetchUsers()}, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={post.filter(x => x.userId === user_id)}
          keyExtractor={(x) => x.id}
          renderItem={({ item }) => <ListItem title={item.title} onPress={() => navigation.navigate('Detail', {title: item.title, body: item.body, name: username})}/>}
        />
      )}
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
  list: {
    alignSelf: "stretch",
  },
});
