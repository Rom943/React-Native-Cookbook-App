import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4e2518" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#574747" },
        drawerContentStyle: { backgroundColor: "#85594c" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#7a3c29",
        drawerActiveBackgroundColor: "#dcb8ac",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
      options={{
        drawerIcon:({color,size})=>(
          <Ionicons name="star" color={color} size={size}/>
        )
      }} />
    </Drawer.Navigator>
  );
}

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
            name="All Categories"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Overview" component={MealsOverViewScreen} />

          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
