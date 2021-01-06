import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import Home from './screens/Home';
import Create from './screens/Create';

const Tab = createBottomTabNavigator();

const App = () =>  {
    
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home'
                : 'md-home';
            } else if (route.name === 'Create') {
              iconName = focused ? 'md-create' : 'md-create';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}
          >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Create" component={Create} />
     </Tab.Navigator>
   </NavigationContainer>  
  );
}

export default App;