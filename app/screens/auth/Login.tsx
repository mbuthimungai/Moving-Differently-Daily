import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import colors from "../../../assets/colors";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import { AuthStackParamList } from "../../navigation/AuthNavigation";
const { width } = Dimensions.get("window");

type LoginProps = NativeStackNavigationProp<AuthStackParamList, "Login">;
const Login = ({ navigation }: { navigation: LoginProps }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [togglePswd, setTogglePswd] = React.useState<boolean>(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center", paddingBottom: 20 }}>
          <Text style={styles.heading}>Hello Again!</Text>
          <Text style={styles.secondaryHeading}>
            Welcome back, you've been missed!
          </Text>
        </View>
        <Text style={styles.inputLbl}>Email Address</Text>
        <AppTextInput
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <View style={{ height: 20 }} />
        <Text style={styles.inputLbl}>Password</Text>
        <AppTextInput
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={togglePswd}
          keyboardType="default"
          toggleSecureEntry={() => {
            setTogglePswd(!togglePswd);
          }}
        />
        <View style={{ height: 20 }} />
        <AppButton onPress={() => {}}>
          <Text style={styles.btnText}>Sign In</Text>
        </AppButton>
        <View style={{ height: 20 }} />
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
          <Text
            style={{
              fontFamily: "Manrope-SemiBold",
              fontSize: 16,
              color: colors.primaryColor,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={{ height: 40 }} />
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>
        <View style={{ height: 20 }} />
        <AppButton
          onPress={() => {}}
          style={{
            backgroundColor: colors.secondaryColor,
            borderColor: colors.primaryColor,
            borderWidth: 1,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              source={require("../../../assets/images/google.png")}
              style={styles.logoImg}
            />
            <Text style={[styles.btnText, { color: colors.dark }]}>
              Sign Up with Apple
            </Text>
          </View>
        </AppButton>
        <View style={{ height: 20 }} />
        <AppButton
          onPress={() => {}}
          style={{
            backgroundColor: colors.secondaryColor,
            borderColor: colors.primaryColor,
            borderWidth: 1,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              source={require("../../../assets/images/apple.png")}
              style={styles.logoImg}
            />
            <Text style={[styles.btnText, { color: colors.dark }]}>
              Sign Up with Apple
            </Text>
          </View>
        </AppButton>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 60,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: colors.grey, fontFamily: "Manrope-Semibold" }}>
            Don't Have An Account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: colors.primaryColor }}>Sign Up For Free</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  heading: {
    color: colors.dark,
    fontFamily: "Manrope-SemiBold",
    fontSize: 30,
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
  inputLbl: {
    color: colors.dark,
    fontFamily: "Manrope-Regular",
    paddingBottom: 5,
    fontSize: 16,
  },
  logoImg: {
    width: 30,
    height: 30,
    paddingRight: 10,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightGrey,
    marginHorizontal: 10,
  },
  orText: {
    color: colors.grey,
    fontFamily: "Manrope-Regular",
    fontSize: 14,
  },

  secondaryHeading: {
    color: colors.grey,
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    marginTop: 10,
    textTransform: "capitalize",
  },
});
export default Login;
