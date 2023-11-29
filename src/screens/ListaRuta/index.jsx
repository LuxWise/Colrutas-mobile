import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import CustomReturn from "../../components/customReturn";
import ItemsList from "../../components/ItemsList";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";

const ListaRuta = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);

  const handleBackButton = () => {
    navigation.replace("Home");
    return true;
  };

  const redirict = () => {
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <CustomReturn icon="clipboard" onPress={redirict} text="Lista de rutas" />
      <ScrollView>
        <View style={{ padding: 20 }}>
          <ItemsList
            img={user1}
            text="Emanuel Gonzalez"
            text2="Colegio Privado"
            text3="donde sea"
          />
          <ItemsList
            img={user1}
            text="David Alvarez"
            text2="Colegio Privado"
            text3="donde sea"
          />
          <ItemsList
            img={user2}
            text="Sofia Lopez"
            text2="Colegio Privado"
            text3="donde sea"
          />
          <ItemsList
            img={user2}
            text="Emilia Corredor"
            text2="Colegio Privado"
            text3="donde sea"
          />
          <ItemsList
            img={user1}
            text="Felipe Muñoz"
            text2="Colegio Privado"
            text3="donde sea"
          />
          <ItemsList
            img={user1}
            text="Miguel Rincon"
            text2="Colegio Privado"
            text3="donde sea"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ListaRuta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
