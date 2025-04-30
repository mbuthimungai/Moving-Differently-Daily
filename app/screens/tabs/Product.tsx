import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import AppTobBarAuth from "../../components/AppTobBarAuth";
import colors from "../../../assets/colors";
import { SearchNavigationParamList } from "../../navigation/SearchNavigation";
import AppCarousel from "../../components/AppCarousel";
import DetailRow from "../../components/DetailRow";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AppButton from "../../components/AppButton";
import { drinksData } from "../../utils/data";
import DrinkCard from "../../components/AppDrinkCard";

interface ProductProps {
  navigation: NativeStackNavigationProp<SearchNavigationParamList, "Product">;
}

const Product: React.FC<ProductProps> = ({ navigation }) => {
  const images = [
    "https://images.unsplash.com/photo-1625947406352-da7998bc4a4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdoaXNrZXklMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1608471250290-f7d6b569ff46?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdoaXNrZXklMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1609872582579-2308ba347c1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdoaXNrZXklMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1694886711662-3286b89b165d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx3aGlza2V5JTIwYm90dGxlfGVufDB8fDB8fHww",
  ];
  const onFavorite = () => {};
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <AppTobBarAuth handleNavBack={() => navigation.goBack()} text="Product" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <AppCarousel images={images} />
        <TouchableOpacity style={styles.favoriteIcon} onPress={onFavorite}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={35}
            color={isFavorite ? colors.warning : colors.dark}
          />
        </TouchableOpacity>
        <Text style={styles.productName}>Jack Daniels</Text>
        <Text style={styles.price}>$300</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeaders}>Product Details</Text>
          <DetailRow label="Category" value="Whiskey" />
          <DetailRow label="Size" value="750ml" />
          {/* <DetailRow label="Pack" value="24pk" /> */}
          <DetailRow label="ABV" value="40%" />
          <DetailRow label="Country" value="United States" />
          <DetailRow label="Region" value="California" />
          {/* <DetailRow label="SKU" value="21276" /> */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeaders}>Description</Text>
          <Text style={styles.descriptionSectionText}>
            0% Estate Grown Blue Agave - mellowed for 14 days in American Oak. A
            long-standing favorite that has won the hearts and minds of the
            people in the magical town of Tequila and the surrounding areas.
            This historical tequila is the foundation for any perfect cocktail.
          </Text>
        </View>
        <AppButton onPress={() => {}} style={styles.btn}>
          <Text style={styles.btnText}>Add to cart</Text>
        </AppButton>
        <View style={styles.section}>
          {/* <Text style={styles.sectionHeaders}>Similar products</Text> */}

          <View
            style={[
              styles.row,
              {
                marginTop: 20,
              },
            ]}
          >
            <Text style={styles.sectionHeader}>Similar Products</Text>
            <TouchableOpacity onPress={() => {}}>
              <AntDesign name="arrowright" size={24} color={colors.dark} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={drinksData}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
  },
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
  },
  section: {
    paddingTop: 10,
  },
  descriptionSectionText: {
    lineHeight: 20,
    fontFamily: "Manrope-Regular",
  },
  favoriteIcon: {
    paddingVertical: 10,
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
  sectionHeaders: {
    fontSize: 20,
    textTransform: "capitalize",
    color: colors.dark,
    textDecorationLine: "underline",
    fontFamily: "Manrope-SemiBold",
    paddingBottom: 10,
  },
  productName: {
    fontFamily: "Manrope-Bold",
    fontSize: 25,
    textTransform: "capitalize",
    color: colors.dark,
  },
  price: {
    fontFamily: "Manrope-Bold",
    paddingVertical: 15,
    fontSize: 18,
    color: colors.dark,
  },
});
export default Product;
