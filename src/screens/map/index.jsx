import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  BackHandler,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect } from "react";
import * as Location from "expo-location";
import markerred from "../../assets/markred.png";
import TopMenu from "../../containers/TopMenu";

const Map = ({ navigation }) => {
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

  const [origin, setOrigin] = React.useState();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 250);

    const fetchData = async () => {
      try {
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
        setLoading(false);

        setOrigin(current);
      } catch (err) {
        console.error("un error en cargar la ubicaion");
      } finally {
        setLoading(false);
      }
    };
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu />
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Mapa</Text>
      </View>
      <View style={styles.mapConatiner}>
        {loading ? (
          <View>
            <Text> Cargando...</Text>
          </View>
        ) : (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 4.653881,
              longitude: -74.103262,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
          >
            <Marker
              coordinate={origin}
              title={"Usted esta aqui"}
              image={markerred}
            />
          </MapView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 15,

    paddingVertical: 20,

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
