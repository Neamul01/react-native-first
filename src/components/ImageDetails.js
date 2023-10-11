import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageDetails = ({ title, imgSource, score }) => {
  return (
    <View>
      <Image source={imgSource} />
      <Text>{title}</Text>
      <Text>Image Score: {score}</Text>
    </View>
  );
};

export default ImageDetails;

const styles = StyleSheet.create({});
