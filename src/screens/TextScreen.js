import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <Text>Enter name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(e) => setText(e)}
      />
      {text ? <Text>My Name: {text}</Text> : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 2,
    paddingStart: 5,
    borderColor: "black",
    borderWidth: 1,
  },
});
