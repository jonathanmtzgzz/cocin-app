import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View className="flex-row">
      <Text className="flex-1 text-xl  font-bold">{headerText}</Text>
      {/* <Ionicons name={headerIcon} color={"black"} size={24} /> */}
    </View>
  );
};

export default Header;
