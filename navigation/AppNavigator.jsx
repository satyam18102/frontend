import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import HomeScreen from "../screens/home/HomeScreen";
import MainApp from "./MainApp";
import Search from "../screens/stocks/Search";
import Details from "../screens/stocks/Details";
import Positions from "../screens/home/Positions";
import SellOrder from "../screens/orders/SellOrder";
import BuyOrder from "../screens/orders/BuyOrder";
import WatchList from "../screens/stocks/WatchList";
import SearchDetails from "../screens/stocks/SearchDetails";

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false, headerStyle: { backgroundColor: "#f4511e" } }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, title: "Login" }}
        />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: true }}
        />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false, headerStyle: { backgroundColor: "#f4511e" } }}
        />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: true, title: "Trending Stocks" }}
        />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: true, title: "Stock Details" }}
        />
      <Stack.Screen
        name="SearchDetails"
        component={SearchDetails}
        options={{ headerShown: true, title: "Stock Details" }}
        />
      <Stack.Screen
        name="Positions"
        component={Positions}
        options={{ headerShown: true}}
        />
      <Stack.Screen
        name="Watchlist"
        component={WatchList}
        options={{ headerShown: true}}
        />
      <Stack.Screen
        name="Buy"
        component={BuyOrder}
        options={{ headerShown: true}}
        />
      <Stack.Screen
        name="Sell"
        component={SellOrder}
        options={{ headerShown: true}}
        />
      
    </Stack.Navigator>
  );
}