import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Positions from '../screens/home/Positions';
import Orders from '../screens/home/Orders';
import Holdings from '../screens/home/Holdings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home/HomeScreen';
import Trending from '../screens/stocks/Search';
import Account from '../screens/profile/Account';

const Tab = createBottomTabNavigator();

// const Screen = (label) => () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>{label} Screen</Text>
//   </View>
// );

export default function TabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarLabelStyle: { fontSize: 14 },
      tabBarStyle: { height: 60 ,marginBottom: 50, paddingBottom: 5 },
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#888',
      tabBarLabel: route.name,
      tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Holdings') iconName = 'cart';
          else if (route.name === 'Orders') iconName = 'bag';
          else if (route.name === 'Profile') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
    })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Holdings" component={Holdings} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Profile" component={Account} />
      </Tab.Navigator>
  );
}
