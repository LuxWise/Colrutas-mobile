import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect } from "react";
import * as Location from "expo-location";

const Map = () => {
  const [origin, setOrigin] = React.useState({
    latitude: 4.634497,
    longitude: -74.068481,
  });

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

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Mapa</Text>
      </View>
      <View style={styles.mapConatiner}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          <Marker coordinate={origin} title={"Usted esta aqui"} />
        </MapView>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    backgroundColor: "#f5f9fc",
  },
  textHeader: {
    color: "#00A081",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 25,
    borderWidth: 2,
    borderColor: "#00A081",
    borderRadius: 10,
  },
  mapConatiner: {
    marginBottom: 30,
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
