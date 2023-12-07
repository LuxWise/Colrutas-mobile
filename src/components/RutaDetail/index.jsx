import { Modal, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import React from "react";

const RutaDetail = ({ isDetailOpen, setIsDetailOpen, text, acudientes }) => {
  return (
    <Modal visible={isDetailOpen} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.detail}>
          <View style={styles.header}>
            <Icon
              onPress={() => setIsDetailOpen(!isDetailOpen)}
              name="cross"
              size={35}
              color="#fff"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{text}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>Conductor: {acudientes}</Text>
            <Text style={styles.info}>Origen: </Text>
            <Text style={styles.info}>Placa: </Text>
            <Text style={styles.info}>Destino: </Text>
            <Text style={styles.info}>Monitor: </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RutaDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0ea5e935",
  },
  detail: {
    width: "80%",
    height: "70%",
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    width: "100%",
    height: "27%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#0ea5e9",
    padding: 20,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#080808",
  },
  textContainer: {
    marginTop: 25,
    alignItems: "center",
  },
  infoContainer: {
    padding: 30,
  },
  info: {
    fontSize: 16,
    fontWeight: "500",
    color: "#080808",
    marginTop: 15,
  },
});
