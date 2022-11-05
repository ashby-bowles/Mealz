import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, cost }) {
  const navigation = useNavigation();

  function selectMealitemHandler() {
    navigation.navigate("MealDetails", { mealId: id });
  }

  return (
    <View style={styles.MealItem}>
      <Pressable
        onPress={selectMealitemHandler}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.InnerContainer}>
          <Image style={styles.Image} source={{ uri: imageUrl }} />
          <Text style={styles.Title}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} cost={cost} />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  Image: { width: "100%", height: 200 },
  MealItem: {
    borderRadius: 8,
    overflow: "hidden",
    margin: 16,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOffset: { wdith: 0, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  InnerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  Title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
