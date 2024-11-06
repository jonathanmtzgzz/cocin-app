import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "../Constant";

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              className={`mr-9 rounded-lg px-4 py-2 my-4 text-black shadow-lg shadow-opacity-10 border-black border-2
                ${index === 0 ? "bg-orange-400" : "bg-gray-200"}`}
            >
              <Text className={`${index === 0 ? "text-white" : "text-black"}`}>
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
