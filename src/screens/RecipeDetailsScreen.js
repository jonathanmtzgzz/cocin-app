import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View className="bg-orange-500 flex-1">
      <SafeAreaView className="flex-row mx-4 mt-8">
        <Pressable className="flex-1" onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
        <Ionicons name="heart-outline" size={28} color="black" />
      </SafeAreaView>
      <View className="bg-white flex-1 mt-40 rounded-tl-[56px] rounded-tr-[56px] items-center px-4">
        <View className="h-80 w-80 absolute -top-36">
          <Image
            source={item.Image}
            style={{ height: 100, width: 100, resizeMode: "contain" }}
          />
        </View>
        {/* Nombre de receta */}
        <Text className="mt-48 text-2xl font-bold">{item.name}</Text>

        <View className="flex-1">
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Descripcion de receta */}
            <Text className="text-base my-4 text-black">
              {item.description}
            </Text>

            {/* Cosas extras */}
            <View className="flex-row justify-around mt-4">
              <View className="bg-red-300 px-4 py-6 rounded-md items-center w-[100px]">
                <Text className="text-lg">⏰</Text>
                <Text className="text-lg font-normal">{item.time}</Text>
              </View>
              <View className="bg-blue-300 px-4 py-6 rounded-md items-center w-[100px]">
                <Text className="text-lg">🍳</Text>
                <Text className="text-lg font-normal">{item.difficulty}</Text>
              </View>
              <View className="bg-yellow-300 px-4 py-6 rounded-md items-center w-[100px]">
                <Text className="text-lg">🔥</Text>
                <Text className="text-lg font-normal">{item.calories}</Text>
              </View>
            </View>

            {/* Ingredientes */}
            <View className="self-start my-5">
              <Text className="text-xl font-semibold mb-2">Ingredients:</Text>

              {item.ingredients.map((ingredient, index) => {
                return (
                  <View className="flex-row items-center my-1" key={index}>
                    <View className="bg-red-600 h-3 w-3 rounded-md"></View>
                    <Text className="text-base ml-2">{ingredient}</Text>
                  </View>
                );
              })}
            </View>

            {/* Pasos */}
            <View className="self-start my-5">
              <Text className="text-xl font-semibold mb-2">Paso a paso:</Text>

              {item.steps.map((step) => {
                return (
                  <View className="flex-row items-center my-1">
                    <View className="bg-red-600 h-3 w-3 rounded-md"></View>
                    <Text className="text-base ml-2">{step}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
