import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ListScreen() {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 22 },
    { name: "Friend 3", age: 24 },
    { name: "Friend 4", age: 23 },
    { name: "Friend 5", age: 25 },
    { name: "Friend 6", age: 22 },
    { name: "Friend 7", age: 26 },
    { name: "Friend 8", age: 24 },
    { name: "Friend 9", age: 25 },
    { name: "Friend 10", age: 27 },
    { name: "Friend 11", age: 25 },
    { name: "Friend 12", age: 24 },
    { name: "Friend 13", age: 23 },
    { name: "Friend 14", age: 25 },
  ];
  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <View style={styles.textView}>
            <Text style={styles.textStyle}>
              {item.name}- Age {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textView: {
    marginBottom: 4,
    marginHorizontal: 4,
    borderWidth: 2,
    borderBlockColor: "#333",
  },
  textStyle: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
