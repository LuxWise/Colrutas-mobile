import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import ItemsHome from "../../components/ItemsHome";
import TopMenu from "../../containers/TopMenu";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopMenu />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>Bienvenido</Text>
      </View>
      <ItemsHome
        direction="Rutas"
        navigation={navigation}
        icon="map-pin"
        text="Rutas"
        text2="Consulta de rutas programadas"
      />
      <ItemsHome
        direction="ListaRuta"
        navigation={navigation}
        icon="clipboard"
        text="Lista de estudiantes"
        text2="Consulta de rutas programadas"
      />
      <ItemsHome
        direction="EstadoRutas"
        navigation={navigation}
        icon="calendar"
        text="Estado de rutas"
        text2="Consulta de rutas programadas"
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f9fc",
    paddingVertical: 20,
  },
  textContainer: {
    width: "85%",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    left: 0,
  },
});
