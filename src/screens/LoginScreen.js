import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {});
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex">
          {/* <Image
            source={require("../../assets/session.png")}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          /> */}
          <View className="absolute top-0 left-0 right-0 p-4 justify-center">
            <View className="mt-28 mb-16">
              <Text className="text-5xl text-primary">Inicia sesión en</Text>
              <Text className="text-5xl font-bold text-primary">CocinApp</Text>
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
                onChangeText={(text) => setEmail(text)}
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
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            {/* Sección para los botones de Iniciar Sesión y Registrarse */}
            <View>
              <TouchableOpacity
                className="rounded-2xl bg-buttons-tertiary-default p-2 w-full mt-8 mb-4 h-11"
                title="Iniciar Sesión"
                onPress={handleSignIn}
              >
                <Text className="p-1 text-center text-white ">
                  Iniciar Sesión
                </Text>
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;
