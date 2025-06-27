import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import MainApp from "./MainApp";
import Search from "../screens/stocks/Search";
import Details from "../screens/stocks/Details";
import Positions from "../screens/home/Positions";
import SellOrder from "../screens/orders/SellOrder";
import BuyOrder from "../screens/orders/BuyOrder";
import WatchList from "../screens/stocks/WatchList";
import SearchDetails from "../screens/stocks/SearchDetails";
import { ThemeContext } from "../ThemeContext";
import NseMostActive from "../screens/stocks/NseMostActive";
import BseMostActive from "../screens/stocks/BseMostActive";
import Shockers from "../screens/stocks/Shockers";
import ShockersDetails from "../screens/stocks/ShockersDetails";
import Ipo from "../screens/stocks/Ipo";

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();
  const { isDarkMode } = React.useContext(ThemeContext);

  const screenOptions = {
  headerStyle: {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff', // dark/light background
  },
  headerTintColor: isDarkMode ? '#ffffff' : '#000000',  // text & icon color
};


  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false, headerStyle: { backgroundColor: "#fff" } }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
        />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: true }}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false, headerStyle: { backgroundColor: "#f4511e" } }}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: true, title: "Trending Stocks" }}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: true, title: "Stock Details" }}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="ShockersDetails"
        component={ShockersDetails}
        options={{ headerShown: true, title: "Stock Details" }}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="SearchDetails"
        component={SearchDetails}
        options={{ headerShown: true, title: "Stock Details" }}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Positions"
        component={Positions}
        options={{ headerShown: true}}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Watchlist"
        component={WatchList}
        options={{ headerShown: true}}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Buy"
        component={BuyOrder}
        options={{ headerShown: true}}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Sell"
        component={SellOrder}
        options={{ headerShown: true}}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Nse"
        component={NseMostActive}
        options={{ headerShown: true , title:'Trending'}}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Bse"
        component={BseMostActive}
        options={{ headerShown: true , title:'Most Active'}}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Ipo"
        component={Ipo}
        options={{ headerShown: true , title:'IPO'}}
        screenOptions={screenOptions}
        />
      <Stack.Screen
        name="Shockers"
        component={Shockers}
        options={{ headerShown: true , title:'Price Shockers'}}
        screenOptions={screenOptions}
        />
      
    </Stack.Navigator>
  );
}