import { Text, View, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.Image}
      ></Image>
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        cost={selectedMeal.affordability}
        textStyle={styles.DetailText}
      />
      <Subtitle> Ingredients</Subtitle>
      <List data={selectedMeal.ingredients}></List>
      <Subtitle> Steps </Subtitle>
      <List data={selectedMeal.steps}></List>
    </View>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  Image: { width: "100%", height: 350 },
  Title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  DetailText: { color: "black", fontSize: 14 },
  Ingredients: {},
  Steps: {},
});
