import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import MealsOverScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import ContextProvider from "./store/context/favorites-context";

import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size}></Ionicons>
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size}></Ionicons>
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <ContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverScreen} />
          <Stack.Screen
            name="MealDetails"
            component={MealsDetailsScreen}
            options={{ title: "Meal Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
