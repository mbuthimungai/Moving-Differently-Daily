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
import { Ionicons } from "@expo/vector-icons";

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
      <ScrollView>
        <Text style={styles.heading}>
          <Text style={{ color: colors.green }}>Budget-friendly{"\n"}</Text>
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

        <View style={{ marginTop: 20 }}>
          <Text style={styles.sectionHeader}>{selectedFilter} Specials</Text>
        </View>
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
  filterList: {
    paddingVertical: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginRight: 10,
  },
  activeFilter: {
    backgroundColor: colors.green,
  },
  filterText: {
    fontSize: 14,
    color: colors.dark,
  },
  activeFilterText: {
    color: "#fff",
    fontWeight: "600",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default Home;
