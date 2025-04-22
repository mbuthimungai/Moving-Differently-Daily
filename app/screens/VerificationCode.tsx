import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AppTobBarAuth from "../components/AppTobBarAuth";
import colors from "../../assets/colors";
import { AuthStackParamList } from "../navigation/AuthNavigation";
import OTPInput from "../components/OTPInput";
import App from "../../App";
import AppButton from "../components/AppButton";

const { width } = Dimensions.get("window");

type VerificationCodeProps = NativeStackNavigationProp<
  AuthStackParamList,
  "VerificationCode"
>;
const VerificationCode = ({
  navigation,
}: {
  navigation: VerificationCodeProps;
}) => {
  const [otp, setOtp] = useState<string>("");
  return (
    <View style={styles.container}>
      <AppTobBarAuth
        text="Verification Code"
        handleNavBack={() => navigation.goBack()}
      />
      <View style={{ height: 60 }} />
      <Text style={styles.secondaryHeading}>
        Enter the verification code sent to your email address
      </Text>
      <View style={styles.otpWrapper}>
        <OTPInput codeLength={5} value={otp} onChange={setOtp} />
      </View>
      <TouchableOpacity onPress={() => {}} style={{ marginTop: 60 }}>
        <Text style={{ fontFamily: "Manrope-Regular" }}>
          Resend code in 60s
        </Text>
      </TouchableOpacity>
      <AppButton
        style={{ width: width - 40, marginTop: 20 }}
        onPress={() => {
          navigation.navigate("ConfirmPassword");
        }}
      >
        <Text style={styles.btnText}>Verify</Text>
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
    alignItems: "center",
  },
  secondaryHeading: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Manrope-SemiBold",
    color: colors.grey,

    paddingBottom: 20,
  },
  otpWrapper: {
    width: width * 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default VerificationCode;
