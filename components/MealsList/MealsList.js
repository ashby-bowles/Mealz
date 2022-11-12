import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderMeal(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      cost: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.Container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
  },
});
