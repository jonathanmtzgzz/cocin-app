import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import PlannerScreen from "../screens/PlannerScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home" color={"black"} size={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="person" color={"black"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="heart" color={"black"} size={24} />,
        }}
      />
      <Tab.Screen
        name="Planner"
        component={PlannerScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="calendar" color={"black"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="search" color={"black"} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
