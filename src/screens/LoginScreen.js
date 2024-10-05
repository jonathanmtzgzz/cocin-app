import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1">
      <Image
        source={require("../../assets/session.png")}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      />
      <View className="absolute top-0 left-0 right-0 p-4 justify-center">
        <View className="my-24">
          <Text className="text-4xl text-white">Bienvenido a</Text>
          <Text className="text-4xl font-bold text-white">CocinApp</Text>
        </View>

        {/* Sección para los input de email y password */}
        <View>
          <Text className="text-lg font-medium text-primary m-1">
            Correo electrónico
          </Text>
          <TextInput
            className="bg-tertiary h-11 border-2 mb-3 px-4 rounded-2xl border-transparent focus:border-gray-400"
            placeholder="someone@example.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text className="text-lg font-medium text-primary m-1">
            Contraseña
          </Text>
          <TextInput
            className="bg-tertiary h-11 border-2 mb-3 px-4 rounded-2xl border-transparent focus:border-gray-400"
            placeholder="********"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Sección para los botones de Iniciar Sesión y Registrarse */}
        <View>
          <TouchableOpacity
            className="rounded-2xl bg-buttons-tertiary-default p-2 w-full mt-16 mb-4 h-11"
            title="Iniciar Sesión"
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="p-1 text-center text-white ">Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center align-bottom">
          <Text>No tienes una cuenta?</Text>
          <TouchableOpacity
            title="Registrarse"
            onPress={() => navigation.navigate("Register")}
          >
            <Text className="text-primary font-bold"> Registrate!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
