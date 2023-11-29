import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  BackHandler,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import CustomReturn from "../../components/customReturn";
import ItemsList from "../../components/ItemsList";
import ruta from "../../assets/ruta.png";
import TopMenu from "../../containers/TopMenu";

const EstadoRutas = ({ navigation }) => {
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
    <SafeAreaView style={styles.container}>
      <TopMenu />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <CustomReturn icon="calendar" onPress={redirict} text="Estado de rutas" />

      <ScrollView>
        <View style={{ padding: 20 }}>
          <ItemsList img={ruta} text="Ruta 161" text2="tal" text3="donde sea" />
          <ItemsList img={ruta} text="Ruta 262" text2="tal" text3="donde sea" />
          <ItemsList img={ruta} text="Ruta 392" text2="tal" text3="donde sea" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EstadoRutas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
});
