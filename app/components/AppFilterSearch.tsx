import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import colors from "../../assets/colors";
import AppTextInput from "./AppTextInput";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import AppButton from "./AppButton";

const filters = ["All", "Whiskey", "Vodka", "Gin", "Brandy", "Tequila"];
type AppFilterSearchProps = {
  bottomSheetRef: React.RefObject<BottomSheet>;
};
const AppFilterSearch = ({ bottomSheetRef }: AppFilterSearchProps) => {
  const snapPoints = ["80%"];
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [priceLow, setPriceLow] = useState<string>("");
  const [priceHigh, setPriceHigh] = useState<string>("");

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      backgroundStyle={{ backgroundColor: colors.AppBg }}
      enablePanDownToClose={true}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop {...backdropProps} disappearsOnIndex={-1} />
      )}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Filter</Text>
          <View style={{ paddingVertical: 20 }}>
            <Text style={styles.label}>Categories</Text>
            <FlatList
              data={filters}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              contentContainerStyle={styles.filterList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.filterButton,
                    selectedFilter === item && styles.activeFilter,
                  ]}
                  onPress={() => setSelectedFilter(item)}
                >
                  <Text
                    style={[
                      styles.filterText,
                      selectedFilter === item && styles.activeFilterText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <Text style={styles.label}>Price</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.inputView}>
              <AppTextInput
                placeholder="$ 0.0"
                value={priceLow}
                onChangeText={setPriceLow}
                keyboardType="numeric"
                style={styles.input}
              />
              <Text style={[styles.caption, { textAlign: "left" }]}>MIN</Text>
            </View>
            <View style={styles.inputView}>
              <AppTextInput
                placeholder="$ 0.0"
                value={priceHigh}
                onChangeText={setPriceHigh}
                keyboardType="numeric"
                style={styles.input}
              />
              <Text style={styles.caption}>MAX</Text>
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.label}>Volume in (ml)</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.inputView}>
                <AppTextInput
                  placeholder="0"
                  value={priceLow}
                  onChangeText={setPriceLow}
                  keyboardType="numeric"
                  style={styles.input}
                />
                <Text style={[styles.caption, { textAlign: "left" }]}>MIN</Text>
              </View>
              <View style={styles.inputView}>
                <AppTextInput
                  placeholder="0"
                  value={priceHigh}
                  onChangeText={setPriceHigh}
                  keyboardType="numeric"
                  style={styles.input}
                />
                <Text style={styles.caption}>MAX</Text>
              </View>
            </View>
          </View>
          <View style={styles.btns}>
            <AppButton
              onPress={() => bottomSheetRef.current?.close()}
              style={[styles.btn, styles.inputView]}
            >
              <Text style={[styles.btnText, { color: colors.dark }]}>
                Cancel
              </Text>
            </AppButton>
            <AppButton
              onPress={() => bottomSheetRef.current?.close()}
              style={[styles.inputView]}
            >
              <Text style={styles.btnText}>Apply Filter</Text>
            </AppButton>
          </View>
        </View>
      </ScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  activeFilter: {
    backgroundColor: colors.primaryColor,
  },
  activeFilterText: {
    color: colors.white,
    fontFamily: "Manrope-Medium",
  },
  btn: {
    backgroundColor: colors.secondaryColor,
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },
  btnText: {
    color: colors.white,
    fontFamily: "Manrope-SemiBold",
    fontSize: 16,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  caption: {
    textAlign: "right",
    fontFamily: "Manrope-Bold",
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: colors.AppBg,
    padding: 10,
  },

  filterList: {
    paddingVertical: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.white,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },

  filterText: {
    fontSize: 14,
    color: colors.dark,
  },
  heading: {
    textAlign: "center",
    fontFamily: "Manrope-Medium",
    fontSize: 24,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  inputView: {
    maxWidth: "48%",
    minWidth: "48%",
  },
  label: {
    fontFamily: "Manrope-Medium",
    fontSize: 16,
    color: colors.dark,
    paddingBottom: 5,
  },
});
export default AppFilterSearch;
