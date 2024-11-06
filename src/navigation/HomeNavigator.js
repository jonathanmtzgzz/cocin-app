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
        name="Desayunos"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="restaurant" color={"black"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Comidas"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="fast-food" color={"black"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Cenas"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="restaurant" color={"black"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Snacks"
        component={PlannerScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="fast-food" color={"black"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="person" color={"black"} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
