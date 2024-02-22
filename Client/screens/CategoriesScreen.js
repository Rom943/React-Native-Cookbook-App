import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";


export default function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("Overview",{
                categoryId: itemData.item.id,
            })
        }
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
          />
        );
      }
      
  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={"2"}
        style={styles.rootScreen}
      />
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {},
});
