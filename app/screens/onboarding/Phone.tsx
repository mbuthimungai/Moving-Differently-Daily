import { StyleSheet, View, Text, Dimensions } from "react-native";
import colors from "../../../assets/colors";
import AppTobBarAuth from "../../components/AppTobBarAuth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { OnboardingParamList } from "../../navigation/OnboardingNavigation";
import AppTextInput from "../../components/AppTextInput";
import { useState } from "react";
import AppButton from "../../components/AppButton";

type PhoneProps = NativeStackNavigationProp<OnboardingParamList, "Phone">;

const { width } = Dimensions.get("window");
const Phone = ({ navigation }: { navigation: PhoneProps }) => {
  const [mobileNum, setMobileNum] = useState<string>("");
  return (
    <View style={styles.container}>
      <AppTobBarAuth
        handleNavBack={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.heading}>What's your phone number?</Text>
      <Text style={styles.expTxt}>
        We'll use this to contact you during your delivery.
      </Text>
      <Text style={styles.inputLbl}>Phone Number</Text>
      <AppTextInput
        value={mobileNum}
        onChangeText={setMobileNum}
        placeholder="123-456-3456"
        style={styles.input}
      />
      <AppButton
        onPress={() => {
          navigation.navigate("ShareLocation");
        }}
        style={{ width: width - 20, marginTop: 20 }}
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
    flex: 1,
    backgroundColor: colors.AppBg,
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: "center",
  },
  heading: {
    color: colors.dark,
    fontFamily: "Manrope-SemiBold",
    fontSize: 25,
    textAlign: "center",
    paddingTop: 20,
  },
  expTxt: {
    width: width * 0.7,
    textAlign: "center",
    fontFamily: "Manrope-Regular",
    color: colors.grey,
    paddingVertical: 20,
  },
  input: {
    width: width - 20,
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
    textAlign: "left",
    width: "100%",
  },
});

export default Phone;
