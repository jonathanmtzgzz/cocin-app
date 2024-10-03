import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 p-4 justify-center">
      <View className="my-8">
        <Text className="text-2xl">Bienvenido a</Text>
        <Text className="text-2xl font-bold">CocinApp</Text>
      </View>

      {/* Sección para los input de email y password */}
      <View>
        <Text className="text-sm font-bold text-black m-1">
          Correo electrónico
        </Text>
        <TextInput
          className="h-10 border-gray-600 border-2 mb-3 px-4 rounded-full"
          placeholder="alguien@example.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Text className="text-sm font-bold text-black m-1">Contraseña</Text>
        <TextInput
          className="h-10 border-gray-600 border-2 mb-3 px-4 rounded-full"
          placeholder="*******"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/*!Sección para los botones de Iniciar Sesión y Registrarse */}
      <View>
        <TouchableOpacity
          className="rounded-full bg-orange-400 text-white my-2 w-32 mx-auto border-2"
          title="Iniciar Sesión"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="p-2 text-center">Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center align-bottom">
        <Text>No tienes una cuenta?</Text>
        <TouchableOpacity
          title="Registrarse"
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-orange-600 font-bold"> Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
