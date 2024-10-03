import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center p-4">
      <View className="mb-5">
        <Text className="text-2xl">Registrarse y empieza</Text>
        <Text className="text-2xl font-bold">a cocinar</Text>
      </View>
      <View>
        <Text className="text-sm font-bold text-black m-1">Nombre</Text>
        <TextInput
          className="h-10 border-2 border-gray mb-3 px-4 rounded-full"
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View>
        <Text className="text-sm font-bold text-black m-1">Email</Text>
        <TextInput
          className="h-10 border-2 border-gray mb-3 px-4 rounded-full"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Text className="text-sm font-bold text-black m-1">Contraseña</Text>
        <TextInput
          className="h-10 border-2 border-gray mb-3 px-4 rounded-full"
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View>
        <Text className="text-sm font-bold text-black m-1">Re-Contraseña</Text>
        <TextInput
          className="h-10 border-2 border-gray mb-3 px-4 rounded-full"
          placeholder="Contraseña"
          secureTextEntry
          value={rePassword}
          onChangeText={setRePassword}
        />
      </View>
      <View>
        <TouchableOpacity
          className="rounded-full bg-orange-400 text-white my-2 w-32 mx-auto border-2"
          onPress={() => {
            /* lógica de registro */
          }}
        >
          <Text className="p-2 text-center">Crear cuenta</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center align-bottom">
        <Text>Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-orange-600 font-bold"> Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
