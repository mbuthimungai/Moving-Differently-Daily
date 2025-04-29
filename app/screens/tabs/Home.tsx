import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRef, useState } from "react";
import AppTopNav from "../../components/AppTopNav";
import colors from "../../../assets/colors";
import LocationSelector from "../../components/LocationSelector";
import BottomSheet from "@gorhom/bottom-sheet";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AppTextInput from "../../components/AppTextInput";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import DrinkCard from "../../components/AppDrinkCard";
import { drinksData, drinkCategories } from "../../utils/data";
import AppDrinkCategory from "../../components/AppDrinkCategory";

const { width } = Dimensions.get("window");
const filters = ["All", "Whiskey", "Vodka", "Gin", "Brandy", "Tequila"];
const Home = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const [search, setSearch] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  return (
    <View style={styles.container}>
      <AppTopNav openBottomSheet={openBottomSheet} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text style={styles.heading}>
          <Text style={{ color: colors.primaryColor }}>
            Budget-friendly{"\n"}
          </Text>
          drinks for you
        </Text>
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

        <View
          style={[
            styles.row,
            {
              marginTop: 20,
            },
          ]}
        >
          <Text style={styles.sectionHeader}>Top deals at your store</Text>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="arrowright" size={24} color={colors.dark} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={drinksData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
          renderItem={({ item }) => (
            <DrinkCard
              image={item.image}
              name={item.name}
              volume={item.volume}
              price={item.price}
              onAdd={() => console.log("Add to cart", item.name)}
              onFavorite={() => console.log("Favorited!", item.name)}
              isFavorite={item.isFavorite}
            />
          )}
        />
        <View
          style={[
            styles.row,
            {
              marginTop: 20,
            },
          ]}
        >
          <Text style={styles.sectionHeader}>Most loved deals</Text>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="arrowright" size={24} color={colors.dark} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={drinksData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
          renderItem={({ item }) => (
            <DrinkCard
              image={item.image}
              name={item.name}
              volume={item.volume}
              price={item.price}
              onAdd={() => console.log("Add to cart", item.name)}
              onFavorite={() => console.log("Favorited!", item.name)}
              isFavorite={item.isFavorite}
            />
          )}
        />
        <View
          style={[
            styles.row,
            {
              marginTop: 20,
            },
          ]}
        >
          <Text style={styles.sectionHeader}>Shop by category</Text>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="arrowright" size={24} color={colors.dark} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={drinkCategories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
          renderItem={({ item }) => (
            <AppDrinkCategory
              key={item.id}
              image={item.image}
              title={item.name}
            />
          )}
        />
      </ScrollView>

      <LocationSelector bottomSheetRef={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  activeFilter: {
    backgroundColor: colors.primaryColor,
  },
  activeFilterText: {
    color: colors.white,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    backgroundColor: colors.AppBg,
    paddingHorizontal: 10,
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
    fontSize: 30,
    fontFamily: "Manrope-Medium",
    textTransform: "capitalize",
    lineHeight: 42,
    marginTop: 20,
  },
  input: {
    width: width - 20,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default Home;
