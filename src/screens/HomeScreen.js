import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import Recipes from "../components/recipes";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { useNavigation } from "@react-navigation/native";

import { categoriesBreakfast } from "../constants/Breakfast";
import { categoriesLunch } from "../constants/Lunch";
import { categoriesDinner } from "../constants/Dinner";
import { categoriesSnacks } from "../constants/Snack";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Desayuno");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {});
  };

  const getRecipesByCategories = () => {
    switch (activeCategory) {
      case "Desayuno":
        return categoriesBreakfast;
      case "Comida":
        return categoriesLunch;
      case "Cena":
        return categoriesDinner;
      case "Snack":
        return categoriesSnacks;
      default:
        return [];
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          className="space-y-6 mt-3"
        >
          <View className="flex-col">
            <View className="mx-4 flex-row justify-between items-center">
              <UserCircleIcon size={60} strokeWidth={2} color={"gray"} />
              <TouchableOpacity onPress={handleSignOut}>
                <ArrowRightOnRectangleIcon
                  size={35}
                  strokeWidth={2}
                  color={"red"}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text className="mx-4 mt-1 text-lg text-neutral-600">
                Bienvenido a CocinApp
              </Text>
            </View>
          </View>

          {/* search bar */}
          <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
            <TextInput
              placeholder="Busca tu receta favorita"
              placeholderTextColor={"gray"}
              style={{ fontSize: 16 }}
              className="flex-1 text-base mb-1 pl-3 tracking-wider"
            />
            <View className="bg-white rounded-full p-3">
              <MagnifyingGlassIcon size={24} strokeWidth={3} color={"gray"} />
            </View>
          </View>

          {/* categories */}
          <View>
            <Categories
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </View>

          {/* recipes */}
          <View>
            <Recipes categories={getRecipesByCategories()} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
