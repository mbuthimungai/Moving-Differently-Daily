import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import colors from "../../assets/colors";

interface AppTopNavProps {
  openBottomSheet: () => void;
}

const AppTopNav = ({ openBottomSheet }: AppTopNavProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.locationContainer}
        onPress={openBottomSheet}
      >
        <Ionicons name="location-outline" size={20} color="#2FAA7A" />
        <Text style={styles.locationText}>Nairobi, KE</Text>
        <Ionicons name="chevron-down-outline" size={16} color="#656B68" />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="#656B68" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="message-square" size={24} color="#656B68" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    paddingVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    elevation: 5,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 4,
    fontSize: 16,
    color: "#2FAA7A",
    fontWeight: "600",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 16,
  },
});

export default AppTopNav;
