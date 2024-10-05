import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 relative">
      <Image
        source={require("../../assets/splash-screen.png")}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      />
      <View className="absolute bottom-0 left-0 right-0 p-4 items-center mb-20">
        <Text className="mb-10 mx-6 text-2xl text-white text-center font-bold">
          Crea y organiza de una mejor manera tus recetas
        </Text>
        <TouchableOpacity
          className="rounded-2xl bg-buttons-primary-default p-2 w-full"
          onPress={() => navigation.navigate("Auth")}
        >
          <Text className="text-white p-3 text-center font-bold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-white p-3 text-center font-bold text-base">
            Crear una nueva cuenta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
