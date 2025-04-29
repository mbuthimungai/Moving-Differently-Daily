import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../../assets/colors";

interface OTPInputProps {
  codeLength: number;
  value: string;
  onChange: (val: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ codeLength, value, onChange }) => {
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    let newValue = value.split("");
    newValue[index] = text;
    let joined = newValue.join("").replace(/ /g, "").slice(0, codeLength);
    onChange(joined);

    if (text && index < codeLength - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array(codeLength)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputsRef.current[index] = ref)}
            value={value[index] || ""}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            style={[styles.input, value[index] ? styles.filledInput : {}]}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    maxWidth: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: colors.white,
  },
  filledInput: {
    backgroundColor: colors.secondaryColor,
    borderColor: colors.secondaryColor,
  },
});

export default OTPInput;
