import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen </Text>
      <Button
        onPress={() => navigation.navigate("Component")}
        title="Got to components demo"
      />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <Button
        title="Image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Square screen"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
