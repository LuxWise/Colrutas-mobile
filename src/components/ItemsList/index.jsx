import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ruta from "../../assets/ruta.png";
import React from "react";

const ItemsList = ({ icon, text, text2, text3, navigation, direction }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={ruta} style={styles.logo} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>Origen: {text2}</Text>
        <Text>Destino: {text3}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    maxHeight: 140,
    margin: 10,

    padding: 20,
    borderRadius: 20,

    shadowColor: "#0ea5e9",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
    backgroundColor: "#f5f9fc",
  },
  textContainer: {
    padding: 12,
  },
  imgContainer: {
    gap: 15,
    flexDirection: "row",
  },
  logo: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 25,
  },
  text: {
    fontWeight: "700",
    fontSize: 17,
    textAlignVertical: "center",
  },
});

export default ItemsList;
