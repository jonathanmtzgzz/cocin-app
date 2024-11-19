import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
  HeartIcon,
  Square3Stack3DIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function RecipeDetailScreen(props) {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 5 }}
        >
          {/* recipe image */}
          <View className="flex-row justify-center">
            <Image
              source={item.Image}
              style={{
                height: 400,
                width: "98%",
                borderRadius: 25,
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                marginTop: 4,
              }}
              className=""
            />
          </View>

          {/* back button */}
          <View className="w-full absolute flex-row justify-between items-center pt-14">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="p-2 rounded-full ml-5 bg-white"
            >
              <ChevronLeftIcon size={40} strokeWidth={4.5} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsFavourite(!isFavourite)}
              className="p-2 rounded-full mr-5 bg-white"
            >
              <HeartIcon
                size={40}
                strokeWidth={2.5}
                color={isFavourite ? "red" : "black"}
              />
            </TouchableOpacity>
          </View>

          {/* recipe details */}
          <View className="px-4 mt-5">
            <Text className="text-2xl font-bold">{item.name}</Text>
            <Text className="text-lg text-neutral-600 mt-2">
              {item.description}
            </Text>

            {/* extra details */}
            <View className="flex-row justify-around mt-4">
              <View className="bg-red-100 px-4 py-3 rounded-md items-center w-[100px]">
                <View className="bg-white rounded-full flex items-center justify-center p-2 mb-1">
                  <ClockIcon size={40} strokeWidth={1.5} color={"black"} />
                </View>
                <Text className="text-lg font-semibold">{item.time}</Text>
                <Text className="text-lg font-semibold">Min</Text>
              </View>
              <View className="bg-blue-200 px-4 py-3 rounded-md items-center w-[100px]">
                <View className="bg-white rounded-full flex items-center justify-center p-2 mb-1">
                  <Square3Stack3DIcon
                    size={40}
                    strokeWidth={1.5}
                    color={"black"}
                  />
                </View>
                <Text className="text-lg font-semibold"></Text>
                <Text className="text-lg font-semibold">{item.difficulty}</Text>
              </View>
              <View className="bg-yellow-200 px-4 py-3 rounded-md items-center w-[100px]">
                <View className="bg-white rounded-full flex items-center justify-center p-2 mb-1">
                  <FireIcon size={40} strokeWidth={1.5} color={"black"} />
                </View>
                <Text className="text-lg font-semibold">{item.calories}</Text>
                <Text className="text-lg font-semibold">Cal</Text>
              </View>
            </View>

            {/* ingredients */}
            <View className="space-y-4 mt-4 mb-4">
              <Text className="flex-1 text-xl font-bold">Ingredientes:</Text>
              {item.ingredients.map((ingredient, index) => {
                return (
                  <View className="flex-row items-center" key={index}>
                    <View className="bg-orange-400 h-3 w-3 rounded-md"></View>
                    <Text className="text-base font-semibold ml-2">
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>

            {/* steps */}
            <View className="">
              <Text className="text-xl font-semibold mb-2">Paso a paso:</Text>
              {item.steps.map((step, index) => {
                return (
                  <View className="flex-row items-center my-1" key={index}>
                    <Text className="text-base font-semibold">{step}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
