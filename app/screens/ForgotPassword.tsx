import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppTobBarAuth from "../components/AppTobBarAuth";
import colors from "../../assets/colors";
import { AuthStackParamList } from "../navigation/AuthNavigation";

type ForgotPasswordProps = NativeStackNavigationProp<
  AuthStackParamList,
  "ForgotPassword"
>;
const { width } = Dimensions.get("window");
const ForgotPassword = ({
  navigation,
}: {
  navigation: ForgotPasswordProps;
}) => {
  const [email, setEmail] = React.useState<string>("");
  return (
    <View style={styles.container}>
      <AppTobBarAuth
        text="Forgot Password"
        handleNavBack={() => navigation.goBack()}
      />
      <View style={{ height: 60 }} />
      <Text style={styles.secondaryHeading}>
        Enter your email to receive a verification code to reset your password
      </Text>
      <AppTextInput
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <View style={{ height: 20 }} />
      <AppButton
        onPress={() => {
          navigation.navigate("VerificationCode");
        }}
      >
        <Text style={styles.btnText}>Send Verification Code</Text>
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
    flex: 1,
    backgroundColor: colors.AppBg,
    paddingTop: 20,
    paddingHorizontal: 20,
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
  secondaryHeading: {
    fontSize: 16,
    fontFamily: "Manrope-SemiBold",
    color: colors.grey,
    textAlign: "center",
    paddingBottom: 20,
  },
});
export default ForgotPassword;
