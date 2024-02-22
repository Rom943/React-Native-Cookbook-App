import { Pressable, Text, View, StyleSheet, Platform } from "react-native";


export default function CategoryGridTile({ title, color, onPress }) {

  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      onPress={onPress} >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  button: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.60,
    shadowOffset: { width: 3, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 8,
  },
});
