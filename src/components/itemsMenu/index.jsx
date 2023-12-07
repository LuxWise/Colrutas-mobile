import { StyleSheet, Text, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import React from "react";

const ItemsMenu = ({ name, icon }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.box}>
        <Icon name={icon} size={30} color="#f5f9fc" />
      </View>
      <Text style={styles.textItem}>{name}</Text>
    </Pressable>
  );
};

export default ItemsMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,

    padding: 15,
    marginVertical: 2,
    marginHorizontal: 10,

    alignItems: "center",
  },
  box: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 3,
    borderRadius: 20,
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
  textItem: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "600",
  },
});
