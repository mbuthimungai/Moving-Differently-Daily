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
      <View style={styles.centerContainer}>
        <Text style={styles.headingText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    position: "relative",
    // borderColor: colors.grey,
    // borderBottomWidth: 1,
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
  centerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontSize: 20,
    fontFamily: "Manrope-SemiBold",
  },
});

export default AppTobBarAuth;
