import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 mx-4 my-8">
      {/* Header */}
      <Header headerText="Hi, Jonathan" headerIcon="home" />

      {/* Search Filter */}
      <SearchFilter icon="search" placeholder={"Search for a recipe"} />

      {/* Categories */}
      <View className="">
        {/* <Text className="text-2xl font-bold">Categorias</Text> */}
        {/* Categories Filter */}
        {/* <CategoriesFilter /> */}
      </View>

      {/* Recipes List Filter */}
      <View className="mt-5 flex-1">
        <Text className="text-2xl font-bold">Recetas</Text>
        {/* Recipes list */}
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
