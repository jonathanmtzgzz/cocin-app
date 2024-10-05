import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigation = useNavigation();

  return (
    <View>
      <Image
        source={require("../../assets/session.png")}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      />
      <View className="absolute top-0 left-0 right-0 p-4 justify-center">
        <View className="my-24">
          <Text className="text-4xl text-white">Registrarse y empieza</Text>
          <Text className="text-4xl font-bold text-white">a cocinar</Text>
        </View>

        <View>
          <Text className="text-lg font-medium text-primary m-1">Nombre</Text>
          <TextInput
            className="bg-tertiary h-11 border-2 mb-3 px-4 rounded-2xl border-transparent focus:border-gray-400"
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View>
          <Text className="text-lg font-medium text-primary m-1">
            Correo electrónico
          </Text>
          <TextInput
            className="bg-tertiary h-11 border-2 mb-3 px-4 rounded-2xl border-transparent focus:border-gray-400"
            placeholder="Correo electrónico"
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
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <Text className="text-lg font-medium text-primary m-1">
            Confirmación de contraseña
          </Text>
          <TextInput
            className="bg-tertiary h-11 border-2 mb-3 px-4 rounded-2xl border-transparent focus:border-gray-400"
            placeholder="Confirma tu contraseña"
            value={rePassword}
            onChangeText={setRePassword}
          />
        </View>
        <View>
          <TouchableOpacity
            className="rounded-2xl bg-buttons-tertiary-default p-2 w-full mt-16 mb-4 h-11"
            title="Iniciar Sesión"
            onPress={() => {
              /* lógica de registro */
            }}
          >
            <Text className="p-1 text-center text-white ">Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center align-bottom">
          <Text>Ya tienes una cuenta?</Text>
          <TouchableOpacity
            title="IniciarSesion"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-primary font-bold"> Inicia Sesión!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
