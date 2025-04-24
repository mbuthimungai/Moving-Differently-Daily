import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";
import colors from "../../assets/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface bottomSheetRefType {
  bottomSheetRef: React.RefObject<BottomSheet>;
}
const { width } = Dimensions.get("window");
const LocationSelector = ({ bottomSheetRef }: bottomSheetRefType) => {
  const snapPoints = ["80%"];
  const [location, setLocation] = useState<string>("");
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      backgroundStyle={{
        backgroundColor: colors.AppBg,
      }}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop {...backdropProps} disappearsOnIndex={-1} />
      )}
    >
      <View style={styles.contentContainer}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: colors.grey,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>Share Your Location</Text>
          <TouchableOpacity onPress={() => bottomSheetRef.current?.close()}>
            <MaterialCommunityIcons
              name="window-close"
              size={24}
              color={colors.dark}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 16, paddingTop: 40 }}>
          <Text style={styles.inputLbl}>Location</Text>
          <AppTextInput
            value={location}
            onChangeText={setLocation}
            placeholder="Enter Location"
            style={styles.input}
          />
          <AppButton onPress={() => bottomSheetRef.current?.close()}>
            <Text style={styles.btnText}>Save</Text>
          </AppButton>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
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
  },
  title: {
    fontSize: 20,
    fontFamily: "Manrope-Bold",
    marginBottom: 12,
  },
  btnText: {
    color: colors.white,
    fontFamily: "Manrope-SemiBold",
    fontSize: 16,
    textTransform: "capitalize",
  },
});

export default LocationSelector;
