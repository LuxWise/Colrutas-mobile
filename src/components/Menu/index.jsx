import { StyleSheet, Text, Modal, View, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import profile from "../../assets/ruta.png";
import React from "react";
import ItemsMenu from "../itemsMenu";

const Menu = ({ setIsMenuOpen, isMenuOpen, navigation }) => {
  const logout = () => {
    navigation.replace("Login");
    return true;
  };

  return (
    <Modal
      visible={isMenuOpen}
      transparent={true}
      animationType="fade"
      style={{ justifyContent: "space-between" }}
    >
      <View style={styles.container}>
        <View>
          <Icon
            onPress={() => setIsMenuOpen(!isMenuOpen)}
            name="cross"
            size={40}
            color="#0ea5e9"
          />
        </View>
        <View style={styles.containerImg}>
          <Image source={profile} style={styles.profile} />
          <Text style={styles.profileText}>Ruta 106</Text>
        </View>
        <View>
          <ItemsMenu icon="user" name="Perfil" />
          <ItemsMenu icon="brush" name="Tema" />
          <ItemsMenu icon="bell" name="Notficaciones" />
        </View>
      </View>
      <Pressable onPress={logout} style={styles.containerLogOut}>
        <Text style={styles.textLogOut}>Cerrar sesion</Text>
      </Pressable>
    </Modal>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "100%",
    backgroundColor: "#f5f9fc",
    padding: 20,
  },
  containerItem: {
    flexDirection: "row",
    gap: 15,

    padding: 15,
    marginHorizontal: 30,

    alignItems: "center",
  },
  containerImg: {
    gap: 20,
    marginTop: "5%",
    width: "100%",
    alignItems: "center",
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 100,

    borderWidth: 5,
    borderColor: "#0ea5e9",
  },
  profileText: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
  },
  containerLogOut: {
    width: "100%",
    alignItems: "center",
    padding: 35,
    backgroundColor: "#f5f9fc",
  },
  textLogOut: {
    color: "#fc032c",
    fontSize: 20,
    fontWeight: "bold",
  },
});
