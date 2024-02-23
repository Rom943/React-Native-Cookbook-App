import { Image, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";


export default function MealDetailsScreen({route}) {

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=>meal.id===mealId)

    return(
    <View>
        <Image source={{uri:selectedMeal.imageUrl}}/>
        <Text>{selectedMeal.title}</Text>
        <View>
            <Text>Ingredients</Text>
            <Text>Steps</Text>
        </View>
    </View>
    )
}