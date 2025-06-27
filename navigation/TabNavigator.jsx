import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Positions from '../screens/home/Positions';
import Orders from '../screens/home/Orders';
import Holdings from '../screens/home/Holdings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home/HomeScreen';
import Account from '../screens/profile/Account';
import { ThemeContext } from '../ThemeContext';

const Tab = createBottomTabNavigator();

// const Screen = (label) => () => (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Text>{label} Screen</Text>
  //   </View>
  // );
  
  export default function TabNavigator() {
    const { isDarkMode } = React.useContext(ThemeContext);
    const screenOptions = {
  headerStyle: {
    backgroundColor: isDarkMode ? '#fff' : '#ffffff', // dark/light background
  },
  headerTintColor: isDarkMode ? '#000' : '#000000',  // text & icon color
};
    return (
      <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarLabelStyle: { fontSize: 14 },
      tabBarStyle: { height: 60 ,marginBottom: 50, paddingBottom: 5 ,  backgroundColor: isDarkMode ? '#1e1e1e' : '#fff'},
      tabBarActiveTintColor: '#548DF3',
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
        <>
          <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:true, title:'Finstox', }} screenOptions={screenOptions} />
          <Tab.Screen name="Holdings" component={Holdings} screenOptions={screenOptions}  />
          <Tab.Screen name="Orders" component={Orders} />
          <Tab.Screen name="Profile" component={Account} />
        </>
      </Tab.Navigator>
  );
}