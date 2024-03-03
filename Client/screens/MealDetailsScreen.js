import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailsScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const changeFavoriteStatusHandler = () => {
    if(mealIsFavorite){
      favoriteMealsCtx.removeFavorite(mealId);
    }
    else{
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal Details",
      headerRight: () => (
        <IconButton icon={mealIsFavorite?'star':"star-outline"} onPress={changeFavoriteStatusHandler}/>
      ),
    });
  }, [changeFavoriteStatusHandler, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.img} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        styleProp={{ color: "white" }}
      />

      <View>
        <Subtitle text={"Ingredients:"} />
        <List list={selectedMeal.ingredients} />
        <Subtitle text={"Steps:"} />
        <List list={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 350,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  rootContainer: {
    marginBottom: 60,
  },
});
