import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{ title: "All Categories" }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverScreen} />
        <Stack.Screen
          name="MealDetails"
          component={MealsDetailsScreen}
          options={{ title: "Meal Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
