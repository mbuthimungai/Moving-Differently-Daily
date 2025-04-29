import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import colors from "../../assets/colors";

interface AppTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  style?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  toggleSecureEntry?: () => void;
  editable?: boolean;
  icon?: React.ReactNode;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  style,

  toggleSecureEntry,
  editable = true,
  icon,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={[
        styles.container,
        style,
        focus ? { borderColor: colors.primaryColor } : { borderColor: "#ccc" },
      ]}
    >
      {icon ? icon : null}
      <TextInput
        style={{ flex: 1, fontFamily: "Manrope-Regular", fontSize: 16 }}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        editable={editable}
      />
      {toggleSecureEntry && (
        <TouchableOpacity onPress={toggleSecureEntry}>
          {secureTextEntry ? (
            <Entypo name="eye-with-line" size={24} color="black" />
          ) : (
            <AntDesign name="eye" size={24} color="black" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default AppTextInput;
