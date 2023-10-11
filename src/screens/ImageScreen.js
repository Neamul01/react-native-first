import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  const componentItems = [
    {
      id: 1,
      title: "Forest",
      img: require("../../assets/forest.jpg"),
    },
    {
      id: 2,
      title: "Beach",
      img: require("../../assets/beach.jpg"),
    },
    {
      id: 2,
      title: "Mountain",
      img: require("../../assets/mountain.jpg"),
    },
  ];
  return (
    <View>
      <ImageDetails
        title="Forest"
        imgSource={require("../../assets/forest.jpg")}
        score={8}
      />
      <ImageDetails
        title="Beach"
        imgSource={require("../../assets/beach.jpg")}
        score={8}
      />
      <ImageDetails
        title="Mountain"
        imgSource={require("../../assets/mountain.jpg")}
        score={8}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
