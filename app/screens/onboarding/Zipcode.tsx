import { StyleSheet, View, Text, Dimensions } from "react-native";
import colors from "../../../assets/colors";
import AppTobBarAuth from "../../components/AppTobBarAuth";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { OnboardingParamList } from "../../navigation/OnboardingNavigation";

type zipCodeProps = NativeStackNavigationProp<OnboardingParamList, "Zipcode">;
const { width } = Dimensions.get("window");
const Zipcode = ({ navigation }: { navigation: zipCodeProps }) => {
  const [zipCode, setZipCode] = useState<string>("");
  return (
    <View style={styles.container}>
      <AppTobBarAuth handleNavBack={() => navigation.goBack()} />
      <Text style={styles.heading}>What's your Zipcode?</Text>
      <Text style={styles.expTxt}>
        We'll use your zip code to ensure accurate delivery of your products.
      </Text>
      <Text style={styles.inputLbl}>Zip code</Text>
      <AppTextInput
        value={zipCode}
        onChangeText={setZipCode}
        placeholder="12345"
        style={styles.input}
      />
      <AppButton
        onPress={() => {}}
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
    backgroundColor: colors.AppBg,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: "center",
  },
  heading: {
    color: colors.dark,
    fontFamily: "Manrope-SemiBold",
    fontSize: 30,
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

export default Zipcode;
