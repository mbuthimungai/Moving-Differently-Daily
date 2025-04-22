import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import colors from "../../assets/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { AuthStackParamList } from "../navigation/AuthNavigation";

const { width } = Dimensions.get("window");

type RegisterProps = NativeStackNavigationProp<AuthStackParamList, "Register">;

const Register = ({ navigation }: { navigation: RegisterProps }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [togglePswd, setTogglePswd] = React.useState<boolean>(false);
  const [confirmPswd, setConfirmPswd] = React.useState<string>("");
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", paddingBottom: 20 }}>
          <Text style={styles.heading}>Create Account</Text>
          <Text style={styles.secondaryHeading}>
            Let's get you started with your account
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
        <Text style={styles.inputLbl}>Confirm Password</Text>
        <AppTextInput
          placeholder="confirm password"
          value={confirmPswd}
          onChangeText={setConfirmPswd}
          style={styles.input}
          secureTextEntry={togglePswd}
          keyboardType="default"
          toggleSecureEntry={() => {
            setTogglePswd(!togglePswd);
          }}
        />
        <View style={{ height: 20 }} />
        <AppButton onPress={() => {}}>
          <Text style={styles.btnText}>Sign Up</Text>
        </AppButton>
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
            backgroundColor: colors.lightGreen,
            borderColor: colors.lightGrey,
            borderWidth: 1,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/google.png")}
              style={styles.logoImg}
            />
            <Text style={[styles.btnText, { color: colors.dark }]}>
              Sign Up with Google
            </Text>
          </View>
        </AppButton>
        <View style={{ height: 20 }} />
        <AppButton
          onPress={() => {}}
          style={{
            backgroundColor: colors.lightGreen,
            borderColor: colors.lightGrey,
            borderWidth: 1,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/apple.png")}
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
            Already Have An Account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: colors.green }}>Sign In</Text>
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
    backgroundColor: "#F5FCFF",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  heading: {
    color: colors.dark,
    fontFamily: "Manrope-SemiBold",
    fontSize: 30,
  },
  secondaryHeading: {
    color: colors.grey,
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    marginTop: 10,
    textTransform: "capitalize",
  },
  logoImg: {
    width: 30,
    height: 30,
    paddingRight: 10,
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
});
export default Register;
