import { View, StyleSheet, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AppTobBarAuth from "../../components/AppTobBarAuth";
import colors from "../../../assets/colors";
import { SearchNavigationParamList } from "../../navigation/SearchNavigation";
import AppCarousel from "../../components/AppCarousel";

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
  return (
    <View style={styles.container}>
      <AppTobBarAuth handleNavBack={() => navigation.goBack()} text="Product" />
      <AppCarousel images={images} />

      <Text style={styles.productName}>Jack Daniels</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.AppBg,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  productName: {
    fontFamily: "Manrope-SemiBold",
    fontSize: 20,
    textTransform: "capitalize",
    color: colors.dark,
  },
});
export default Product;
