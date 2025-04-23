import { View, Text, StyleSheet, Dimensions } from "react-native";
import AppTobBarAuth from "../../components/AppTobBarAuth";
import colors from "../../../assets/colors";
import AppTextInput from "../../components/AppTextInput";
import { useState } from "react";
import AppButton from "../../components/AppButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { OnboardingParamList } from "../../navigation/OnboardingNavigation";

type NameProps = NativeStackNavigationProp<OnboardingParamList, "Name">;

const { width } = Dimensions.get("window");
const Name = ({ navigation }: { navigation: NameProps }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  return (
    <View style={styles.container}>
      <AppTobBarAuth
        handleNavBack={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.heading}>What's your name?</Text>
      <View style={{ height: 40 }} />
      <Text style={styles.inputLbl}>First name</Text>
      <AppTextInput
        placeholder="first name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <Text style={styles.inputLbl}>Last name</Text>
      <AppTextInput
        placeholder="last name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <AppButton
        onPress={() => {
          console.log("next clicked");
        }}
      >
        <Text style={styles.btnText}>Next</Text>
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
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  heading: {
    color: colors.dark,
    fontFamily: "Manrope-SemiBold",
    fontSize: 30,
    textAlign: "center",
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
    marginBottom: 30,
  },
  inputLbl: {
    color: colors.dark,
    fontFamily: "Manrope-Regular",
    paddingBottom: 5,
    fontSize: 16,
  },
});
export default Name;
