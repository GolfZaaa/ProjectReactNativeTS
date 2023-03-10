import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import React from "react";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Text } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { Navigation } from "./src/infrastructure/navigation";
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const TAB_ICON:any = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }:any) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }:any) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const Settings = () => (
  
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
        <Navigation/>
        </Provider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
