import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import React from 'react';
import "./global.css";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
// Working imports with .jsx extensions
import WorkoutScreen from './src/Screens/WorkoutScreen.jsx';
import TimerScreen from './src/Screens/TimerScreen.jsx';
import CalculationScreen from './src/Screens/CalculationScreen.jsx';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon : ({ color, size }) => {
            switch (route.name) {
              case 'Workout':
                return (<MaterialCommunityIcons 
                  name="dumbbell" 
                  size={size} 
                  color={color} 
                  />
                );
              case 'Timer':
                return (<Ionicons
                  name="timer-outline"
                  size={size}
                  color={color}
                  />
                );
              case 'Calculator':
                return (<Ionicons
                  name="calculator-outline"
                  size={size}
                  color={color}
                  />
                );
              default:
                return null;
            }
          },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: "black",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingVertical: 5,
        },
        tabBarActiveTintColor: "aqua",
        tabBarInactiveTintColor: "gray",
        })}
        >
        <Tab.Screen name="Workout" component={WorkoutScreen} />
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Calculator" component={CalculationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
