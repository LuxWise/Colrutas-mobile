import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from "../screens/map";
import Chat from "../screens/chat";
import Dashboard from "../screens/Dashboard";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native";
import Rutas from "../screens/Rutas";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: "#ffffff",
  tabBarInactiveTintColor: "#ffffff",
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    elevation: 0,
    backgroundColor: "#0ea5e9",
  },
};

const ButtomTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Dashboard">
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name="map" color={"#ffffff"} size={25} />
            ),
          }}
          name="Map"
          component={Map}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: () => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="home" color={"#ffffff"} size={25} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons name="chatbox" color={"#ffffff"} size={25} />
            ),
          }}
          name="Chat"
          component={Chat}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default ButtomTabs;
