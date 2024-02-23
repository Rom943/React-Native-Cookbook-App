import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#4e2518" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#574747" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{ title: "Categories" }}
          />
          <Stack.Screen name="Overview"
           component={MealsOverViewScreen}
          //  options={({route,navigation})=>{
          //   const catId=route.params.categoryId;
          //   return {
          //     title:catId
          //   }
          //  }}
           />
           <Stack.Screen name='MealDetails' component={MealDetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
