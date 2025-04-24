import { StyleSheet, View, Text } from "react-native";
import { useRef } from "react";
import AppTopNav from "../../components/AppTopNav";
import colors from "../../../assets/colors";
import LocationSelector from "../../components/LocationSelector";
import BottomSheet from "@gorhom/bottom-sheet";

const Home = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <AppTopNav openBottomSheet={openBottomSheet} />
      <Text>Home screen</Text>
      <LocationSelector bottomSheetRef={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.AppBg,
  },
});

export default Home;
