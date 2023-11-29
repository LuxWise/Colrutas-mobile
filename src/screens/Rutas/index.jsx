import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  BackHandler,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect } from "react";
import CustomReturn from "../../components/customReturn";
import markerblue from "../../assets/markblue.png";
import markerred from "../../assets/markred.png";
import * as Location from "expo-location";
import TopMenu from "../../containers/TopMenu";

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

  const redirict = () => {
    navigation.replace("Home");
  };

  const [origin, setOrigin] = React.useState({
    latitude: 4.596536,
    longitude: -74.162146,
  });
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
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <CustomReturn icon="map-pin" onPress={redirict} text="Rutas" />

      <View style={styles.mapConatiner}>
        {loading ? (
          <View>
            <Text> Cargando...</Text>
          </View>
        ) : (
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
        )}
      </View>
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
    width: "95%",
    height: "85%",
    paddingVertical: 20,
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
