import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categories } from "../constants/Constant";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Categories(activeCategory, setActiveCategory) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {categories.map((cat, index) => {
          let isActive = cat.category == activeCategory;
          let activeButtonClass = isActive ? "bg-amber-400" : "bg-black/10";
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(cat.category)}
              className="flex items-center space-y-1"
            >
              <View className={"rounded-full p-[6px]" + activeButtonClass}>
                <Image
                  source={cat.Image}
                  style={{ height: 60, width: 60, borderRadius: 100 }}
                />
              </View>
              <Text className="text-neutral-600 text-sm ml-2">
                {cat.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
