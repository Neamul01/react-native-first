import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen </Text>
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Got to components demo"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Component")}>
        <Text>Go to list</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
