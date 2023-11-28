import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { Icon as Ruturn } from "react-native-vector-icons/Feather";
import { Text, StyleSheet, Pressable, View } from "react-native";

const CustomReturn = ({ onPress, text, icon }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon name="arrow-left" size={30} fontWeight="bold" color="#0ea5e9" />

      <View style={styles.box}>
        <Icon name={icon} size={25} fontWeight="bold" color="#f5f9fc" />
      </View>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",

    width: "100%",
    maxHeight: 60,
    padding: 15,
  },
  box: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#f0f5ff",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,

    backgroundColor: "#0ea5e9",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CustomReturn;
