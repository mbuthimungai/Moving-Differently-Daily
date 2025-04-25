import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/colors";

interface DrinkCardProps {
  image: any;
  name: string;
  volume: string;
  price: string;
  onAdd: () => void;
  onFavorite?: () => void;
  isFavorite?: boolean;
}

const DrinkCard: React.FC<DrinkCardProps> = ({
  image,
  name,
  volume,
  price,
  onAdd,
  onFavorite,
  isFavorite = false,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <TouchableOpacity style={styles.favoriteIcon} onPress={onFavorite}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={25}
          color={isFavorite ? colors.warning : colors.white}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
        <Text style={styles.volume}>{volume}</Text>

        <View style={styles.footer}>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity style={styles.addButton} onPress={onAdd}>
            <Ionicons name="add" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightGreen,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    width: 180,
    // marginRight: 16,
    padding: 5,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    height: 330,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: colors.dark,
    borderRadius: 20,
    padding: 5,
  },
  infoContainer: {
    padding: 10,
    paddingHorizontal: 0,
  },
  name: {
    color: colors.dark,
    fontSize: 14,
    fontFamily: "Manrope-SemiBold",
    marginBottom: 4,
    height: 39,
  },
  volume: {
    color: colors.grey,
    fontSize: 12,
    marginBottom: 8,
    fontFamily: "Manrope-Regular",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.darkLightGreen,
    borderRadius: 12,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  price: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    color: colors.dark,
    fontFamily: "Manrope-Bold",
    fontSize: 14,
  },
  addButton: {
    backgroundColor: colors.green,
    borderRadius: 8,
    padding: 6,
  },
});

export default DrinkCard;
