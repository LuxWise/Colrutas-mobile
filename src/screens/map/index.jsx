import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  BackHandler,
} from "react-native";
import React from "react";
import TopMenu from "../../layout/TopMenu";

const Map = ({ navigation }) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu navigation={navigation} />
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Mapa</Text>
      </View>
      <View style={styles.mapConatiner}></View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    backgroundColor: "#f5f9fc",
  },
  textHeader: {
    color: "#0ea5e9",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 25,
    borderWidth: 2,
    borderColor: "#0ea5e9",
    borderRadius: 10,
  },
  mapConatiner: {
    marginBottom: 30,
    width: "95%",
    height: "78%",
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
