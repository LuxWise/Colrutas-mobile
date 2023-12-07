import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  BackHandler,
} from "react-native";
import React from "react";
import CustomReturn from "../../components/customReturn";
import TopMenu from "../../layout/TopMenu";
import Icon from "react-native-vector-icons/Feather";

const Rutas = ({ navigation }) => {
  React.useEffect(() => {
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
      <TopMenu navigation={navigation} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <CustomReturn icon="map-pin" onPress={redirict} text="Rutas" />
      <View style={styles.mapConatiner}></View>
    </SafeAreaView>
  );
};

export default Rutas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  mapConatiner: {
    marginBottom: 30,
    width: "95%",
    height: "85%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 7,
    elevation: 10,
  },
  markContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  map: {
    flex: 1,
  },
});
