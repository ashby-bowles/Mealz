import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, cost, style, textStyle }) {
  return (
    <View>
      <View style={[styles.Details, style]}>
        <Text style={[styles.ItemDetails, textStyle]}>{duration}m</Text>
        <Text style={[styles.ItemDetails, textStyle]}>
          {complexity.toUpperCase()}
        </Text>
        <Text style={[styles.ItemDetails, textStyle]}>
          {cost.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}
export default MealDetails;

const styles = StyleSheet.create({
  Details: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },
  ItemDetails: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
