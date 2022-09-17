import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverScreen({ route }) {
  const catId = route.params.CategoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  function renderMeal(itemData) {
    return <MealItem title={itemData.item.title}></MealItem>;
  }

  return (
    <View style={styles.Container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

export default MealsOverScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
  },
});
