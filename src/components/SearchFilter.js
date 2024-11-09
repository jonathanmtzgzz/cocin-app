import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View className="bg-white flex-row py-4 px-4 my-4 rounded-lg text-black shadow-lg shadow-opacity-10">
      <Ionicons name={icon} size={24} color="black" />
      <TextInput className="pl-2 text-[16px] text-gray-500">
        {placeholder}
      </TextInput>
    </View>
  );
};

export default SearchFilter;
