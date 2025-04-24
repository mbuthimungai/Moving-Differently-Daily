import { Dimensions, StyleSheet, Text, View } from "react-native";
import LocationIcon from "../../../assets/images/LocationIcon";
import colors from "../../../assets/colors";
import AppTobBarAuth from "../../components/AppTobBarAuth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { OnboardingParamList } from "../../navigation/OnboardingNavigation";
import AppButton from "../../components/AppButton";

type ShareLocationProps = NativeStackNavigationProp<
  OnboardingParamList,
  "ShareLocation"
>;

const { width } = Dimensions.get("window");
const ShareLocation = ({ navigation }: { navigation: ShareLocationProps }) => {
  return (
    <View style={styles.container}>
      <AppTobBarAuth
        handleNavBack={() => {
          navigation.goBack();
        }}
      />

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <LocationIcon />
      </View>

      <Text style={styles.subHeading}>Share Location</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.expTxt}>
          We'll use your location to ensure accurate delivery of your products.
        </Text>
      </View>
      <AppButton onPress={() => {}} style={{ marginBottom: 30 }}>
        <Text style={styles.btnText}>Share Location</Text>
      </AppButton>
      <AppButton
        onPress={() => {
          navigation.navigate("Zipcode");
        }}
        style={{
          backgroundColor: colors.lightGreen,
          borderWidth: 1,
          borderColor: colors.lightGrey,
        }}
      >
        <Text style={[styles.btnText, { color: colors.dark }]}>Not Now</Text>
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
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  expTxt: {
    width: width * 0.7,
    textAlign: "center",
    fontFamily: "Manrope-Regular",
    color: colors.grey,
    paddingVertical: 20,
  },
  subHeading: {
    fontFamily: "Manrope-SemiBold",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 30,
    color: colors.dark,
  },
});
export default ShareLocation;
