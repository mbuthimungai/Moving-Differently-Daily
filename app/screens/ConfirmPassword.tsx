import { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import colors from "../../assets/colors";
import AppTobBarAuth from "../components/AppTobBarAuth";
import { AuthStackParamList } from "../navigation/AuthNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

type ConfirmPasswordProps = NativeStackNavigationProp<
  AuthStackParamList,
  "ConfirmPassword"
>;

const { width } = Dimensions.get("window");
const ConfirmPassword = ({
  navigation,
}: {
  navigation: ConfirmPasswordProps;
}) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [toggleSecureEntry, setToggleSecureEntry] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <AppTobBarAuth
        text="New Password"
        handleNavBack={() => navigation.goBack()}
      />
      <View style={{ height: 40 }} />
      <Text style={styles.secondaryText}>Create your new password</Text>
      <View style={{ height: 30 }} />
      <Text style={styles.inputLbl}>Enter your new password</Text>
      <AppTextInput
        placeholder="new password"
        style={styles.input}
        secureTextEntry={toggleSecureEntry}
        keyboardType="default"
        value={password}
        onChangeText={setPassword}
        toggleSecureEntry={() => {
          setToggleSecureEntry(!toggleSecureEntry);
        }}
      />
      <View style={{ height: 20 }} />
      <Text style={styles.inputLbl}>Confirm new password</Text>
      <AppTextInput
        placeholder="Confirm new password"
        style={styles.input}
        secureTextEntry={toggleSecureEntry}
        keyboardType="default"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        toggleSecureEntry={() => {
          setToggleSecureEntry(!toggleSecureEntry);
        }}
      />
      <View style={{ height: 20 }} />
      <AppButton
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{ width: width - 40, marginTop: 20 }}
      >
        <Text style={styles.btnText}>Submit</Text>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: colors.white,
    fontFamily: "Manrope-SemiBold",
    fontSize: 16,
    textTransform: "capitalize",
  },
  container: {
    backgroundColor: colors.AppBg,
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  inputLbl: {
    color: colors.grey,
    fontFamily: "Manrope-Regular",
    paddingBottom: 5,
    fontSize: 16,
  },
  input: {
    width: width - 40,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginTop: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  secondaryText: {
    fontSize: 18,
    fontFamily: "Manrope-Medium",
    color: colors.dark,
    textTransform: "capitalize",
  },
});

export default ConfirmPassword;
