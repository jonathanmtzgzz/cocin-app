import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-end bg-orange-500">
      <View className="items-center mb-20">
        <Text className="mb-10 mx-6 text-3xl text-white text-center">
          Crea y organiza de una mejor manera tus recetas
        </Text>
        <TouchableOpacity
          className="rounded-2xl bg-green-950 p-2 w-3/4"
          onPress={() => navigation.navigate("Auth")}
        >
          <Text className="text-white p-3 text-center">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
