import { StyleSheet, View, Text } from "react-native";
import { useRef } from "react";
import AppTopNav from "../../components/AppTopNav";
import colors from "../../../assets/colors";
import LocationSelector from "../../components/LocationSelector";
import BottomSheet from "@gorhom/bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <AppTopNav openBottomSheet={openBottomSheet} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>
          <Text style={{ color: colors.green }}>Budget-friendly{"\n"}</Text>
          drinks for you
        </Text>
      </ScrollView>

      <LocationSelector bottomSheetRef={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.AppBg,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 30,
    fontFamily: "Manrope-Medium",
    textTransform: "capitalize",
    lineHeight: 42,
    marginTop: 20,
  },
});

export default Home;
