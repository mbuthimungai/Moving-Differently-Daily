import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "../../assets/colors";

interface AppTobBarAuthProps {
  text?: string;
  handleNavBack?: () => void;
}
const AppTobBarAuth: React.FC<AppTobBarAuthProps> = ({
  text,
  handleNavBack,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconView} onPress={handleNavBack}>
        <MaterialIcons name="chevron-left" size={20} color={colors.dark} />
      </TouchableOpacity>
      <Text style={styles.headingText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconView: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  headingText: {
    fontSize: 20,
    fontFamily: "Manrope-SemiBold",
    flex: 1,
    textAlign: "center",
  },
});
export default AppTobBarAuth;
