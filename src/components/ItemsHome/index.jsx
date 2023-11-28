import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React from "react";

const ItemsHome = ({ icon, text, text2, navigation, direction }) => {
  const redirect = () => {
    navigation.replace(`${direction}`);
  };

  return (
    <Pressable onPress={redirect} style={styles.container}>
      <View style={styles.box}>
        <Icon name={icon} size={40} color="#f5f9fc" />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,

    padding: 15,
    marginVertical: 2,

    alignItems: "center",
  },
  box: {
    width: 80,
    height: 80,
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
  containerText: {
    flex: 1,
    flexDirection: "column",

    width: "100%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text2: {},
});

export default ItemsHome;
