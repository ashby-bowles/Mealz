import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import { FavoritesContext } from "../store/context/favorites-context";

function MealsDetailsScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            color="grey"
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.Image}
      ></Image>
      <Text style={styles.Title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        cost={selectedMeal.affordability}
        textStyle={styles.DetailText}
      />
      <View style={styles.OuterContainer}>
        <View style={styles.DetailContainer}>
          <Subtitle> Ingredients</Subtitle>
          <List data={selectedMeal.ingredients}></List>
          <Subtitle> Steps </Subtitle>
          <List data={selectedMeal.steps}></List>
        </View>
      </View>
    </ScrollView>
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
  DetailContainer: { maxWidth: "80%" },
  OuterContainer: { alignItems: "center", paddingBottom: 30 },
  DetailText: { color: "black", fontSize: 14 },
  Ingredients: {},
  Steps: {},
});
