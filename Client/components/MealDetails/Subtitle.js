import { Text, View, StyleSheet } from "react-native";

export default function Subtitle({ text }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 10,
    marginHorizontal: 50,
    marginVertical: 20,
  },
});
