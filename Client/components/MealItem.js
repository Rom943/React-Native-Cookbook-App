import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native'

export default function MealItem({
  title,
  img,
  duration,
  complexity,
  affordability,
  id
})
{

const navigation = useNavigation();
function selectMeal(){
  navigation.navigate('MealDetails',{mealId:id})
}


  return (
    <View style={styles.mealItem}>
      <Pressable onPress={selectMeal} style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
        <Image style={styles.image} source={{ uri: img }} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <Text>- {duration}m </Text>
          <Text> - {complexity} </Text>
          <Text> - {affordability} -</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
  mealItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 12,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
