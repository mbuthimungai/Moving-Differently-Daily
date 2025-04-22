import React from "react";
import { TouchableOpacity, Text, StyleSheet, StyleProp } from "react-native";
import colors from "../../assets/colors";

interface AppButtonProps {
  onPress: () => void;
  style?: StyleProp<any>;
  children: React.ReactNode;
}
const AppButton: React.FC<AppButtonProps> = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Manrope-Regular",
  },
});
export default AppButton;
