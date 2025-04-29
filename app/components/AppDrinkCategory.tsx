import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../../assets/colors";
import React from "react";

interface AppDrinkCategoryProps {
  image: string;
  title: string;
}

const { width } = Dimensions.get("window");
const IMAGE_SIZE = width * 0.4;

const AppDrinkCategory: React.FC<AppDrinkCategoryProps> = ({
  image,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: IMAGE_SIZE + 30,
    width: IMAGE_SIZE,
  },
  circle: {
    borderRadius: IMAGE_SIZE / 2,
    borderWidth: 2,
    borderColor: colors.lightGrey,
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    overflow: "hidden",
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: colors.white,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Manrope-SemiBold",
    color: colors.dark,
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export default AppDrinkCategory;
