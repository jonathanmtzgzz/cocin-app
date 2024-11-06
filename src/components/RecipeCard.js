import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { recipeList } from "../Constant";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("RecipeDetail", { item: item })}
            className="bg-slate-200 text-black shadow-lg shadow-opacity-1
            border-black rounded-2xl my-4 items-center px-2 py-7"
          >
            <Image
              source={item.Image}
              // style={{ width: 150, height: 150, resizeMode: "cover" }}
              className="w-32 h-32 rounded-lg mb-2"
            />
            <Text>{item.name}</Text>
            <View className="flex-row mt-2">
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View className="flex-row">
                <Text className="">{item.rating}</Text>
                <Ionicons
                  name="star"
                  size={16}
                  color="orange"
                  style={{ marginTop: 3, marginLeft: 2 }}
                />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});
