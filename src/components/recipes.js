// Recipes.js
import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function Recipes({ categories }) {
  const navigation = useNavigation();
  if (!categories || categories.length === 0) {
    return <Text>No recipes available</Text>; // o algún mensaje de error/log
  }
  return (
    <View className="mx-4 space-y-3">
      <Text className="text-3xl font-bold">Recetas</Text>
      <View>
        <MasonryList
          data={categories}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => (
            <RecipeCard item={item} index={i} navigation={navigation} />
          )}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}

const RecipeCard = ({ item, index, navigation }) => {
  let isEven = index % 2 == 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center mb-4 space-y-1"
        onPress={() => navigation.navigate("RecipeDetail", { ...item })}
      >
        <Image
          source={item.Image}
          style={{ height: index % 3 == 0 ? 200 : 300, width: "100%" }}
          className="bg-black/5 rounded-[35px]"
        />
        <Text className="text-lg font-bold text-neutral-600 ml-2">
          {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </Pressable>
    </Animated.View>
  );
};
