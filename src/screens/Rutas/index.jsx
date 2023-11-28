import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  BackHandler,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect } from "react";
import CustomReturn from "../../components/customReturn";
import markerblue from "../../assets/markblue.png";
import markerred from "../../assets/markred.png";
import * as Location from "expo-location";

const Rutas = ({ navigation }) => {
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

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const current = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      setOrigin(current);
    })();
  }, []);

  const [origin, setOrigin] = React.useState({
    latitude: 4.596536,
    longitude: -74.162146,
  });

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
      <CustomReturn icon="map-pin" onPress={redirict} text="Rutas" />

      <View style={styles.mapConatiner}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 4.596536,
            longitude: -74.162146,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          <Marker
            coordinate={{
              latitude: 4.596536,
              longitude: -74.162146,
            }}
            title={"Destino 1"}
            image={markerblue}
          />
          <Marker coordinate={origin} title={"Yo"} image={markerred} />
        </MapView>
      </View>
    </View>
  );
};

export default Rutas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  mapConatiner: {
    width: "95%",
    height: "72%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 7,
    elevation: 10,
  },
  map: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
  },
});
