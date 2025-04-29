import { Dimensions, StyleSheet, Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import colors from "../../../assets/colors";
import AppTopNav from "../../components/AppTopNav";
import LocationSelector from "../../components/LocationSelector";
import AppTextInput from "../../components/AppTextInput";
import DrinkCard from "../../components/AppDrinkCard";
import { drinksData } from "../../utils/data";

const Search = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const [search, setSearch] = useState<string>("");
  return (
    <View style={styles.container}>
      <AppTopNav openBottomSheet={openBottomSheet} />
      <View style={styles.row}>
        <View style={styles.inputWrapper}>
          <AppTextInput
            value={search}
            placeholder="Search"
            onChangeText={setSearch}
            icon={
              <Ionicons
                name="search"
                color={colors.grey}
                size={24}
                style={{ paddingRight: 5 }}
              />
            }
            style={styles.input}
          />
        </View>
        <View style={styles.filterIconWrapper}>
          <MaterialCommunityIcons
            name="tune-variant"
            size={24}
            color={colors.white}
            style={styles.filterIcon}
          />
        </View>
      </View>
      <Text style={styles.results}>40 results</Text>

      <FlatList
        data={drinksData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <DrinkCard
              image={item.image}
              name={item.name}
              volume={item.volume}
              price={item.price}
              onAdd={() => console.log("Add to cart", item.name)}
              onFavorite={() => console.log("Favorited!", item.name)}
              isFavorite={item.isFavorite}
              style={styles.drinkCard}
            />
          </View>
        )}
      />
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
  cardWrapper: {
    flex: 1,
    margin: 5,
    minWidth: "48%",
    maxWidth: "48%",
  },
  drinkCard: { width: "100%" },
  filterIconWrapper: {
    marginLeft: 20,
  },
  filterIcon: {
    backgroundColor: colors.primaryColor,
    padding: 12,
    borderRadius: 10,
  },
  input: {
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  inputWrapper: {
    flex: 1,
  },
  results: {
    fontFamily: "Manrope-SemiBold",
    paddingBottom: 10,
    color: colors.dark,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Search;
