import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import Recipes from "../components/recipes";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <View>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        <View className="flex-col">
          <View className="mx-4 flex-row justify-between items-center">
            {/* <Image
              source={require("../../assets/icon.png")}
              style={{ height: 50, width: 50 }}
            /> */}
            <UserCircleIcon size={60} strokeWidth={2} color={"gray"} />
            <BellIcon size={40} strokeWidth={2} color={"gray"} />
          </View>
          <View>
            <Text className="mx-4 mt-1 text-lg text-neutral-600">
              Bienvenido a Cocin-App, Jonathan
            </Text>
          </View>
        </View>

        {/* <View className="mx-4 space-y-2 mb-2">
          <View>
            <Text className="text-4xl font-semibold text-neutral-600">
              Prepara tu propia comida,
            </Text>
            <Text className="text-3xl font-bold text-neutral-500">
              quedate en <Text className="text-orange-400">Casa</Text>
            </Text>
          </View>
        </View> */}

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
          <Recipes categories={Categories} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
