import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import colors from "../../assets/colors";

interface DetailRowProps {
  label: string;
  value: string;
  dotColor?: string;
}

const DetailRow: React.FC<DetailRowProps> = ({
  label,
  value,
  dotColor = colors.lightGrey,
}) => {
  const { width } = useWindowDimensions();
  const maxLabelWidth = width * 0.4;

  // Calculate the number of dots dynamically based on screen width
  const dots =
    "................................................................................................................";

  return (
    <View style={styles.row}>
      <Text style={[styles.label, { maxWidth: maxLabelWidth }]}>{label}</Text>
      <Text
        numberOfLines={1}
        ellipsizeMode="clip"
        style={[styles.dots, { color: dotColor, flex: 1 }]}
      >
        {dots}
      </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dots: {
    marginHorizontal: 8,
    fontSize: 12,
    letterSpacing: 1,
  },
  label: {
    fontFamily: "Manrope-SemiBold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  value: {
    fontFamily: "Manrope-Medium",
    fontSize: 16,
  },
});

export default DetailRow;
