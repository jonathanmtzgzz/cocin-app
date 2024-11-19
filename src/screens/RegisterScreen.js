import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    if (password !== rePassword) {
      setErrorMessage(
        <Text style={{ color: "red", fontSize: 20 }}>
          Las contraseñas no coinciden
        </Text>
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setErrorMessage(
          <Text style={{ color: "orange", fontSize: 20 }}>
            Usuario creado correctamente
          </Text>
        );
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          {/* <Image
            source={require("../../assets/session.png")}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          /> */}
          <View className="absolute top-0 left-0 right-0 p-4 justify-center">
            <View className="mt-16 mb-8">
              <Text className="text-5xl text-primary">Registrate</Text>
              <Text className="text-5xl font-bold text-primary">a cocinar</Text>
            </View>

            <View>
              <Text className="text-lg font-medium text-primary m-1">
                Nombre
              </Text>
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
                secureTextEntry={true}
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
                secureTextEntry={true}
                value={rePassword}
                onChangeText={setRePassword}
              />
            </View>
            {errorMessage ? (
              <Text style={{ color: "red", textAlign: "center" }}>
                {errorMessage}
              </Text>
            ) : null}
            <View>
              <TouchableOpacity
                className="rounded-2xl bg-buttons-tertiary-default p-2 w-full mt-8 mb-4 h-11"
                title="Crear Cuenta"
                onPress={handleCreateAccount}
              >
                <Text className="p-1 text-center text-white">Crear Cuenta</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center align-bottom">
              <Text>¿Ya tienes una cuenta?</Text>
              <TouchableOpacity
                title="Iniciar Sesión"
                onPress={() => navigation.navigate("Login")}
              >
                <Text className="text-primary font-bold"> Inicia Sesión!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RegisterScreen;
