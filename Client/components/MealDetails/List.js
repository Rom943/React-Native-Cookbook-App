import { Text, View, StyleSheet } from "react-native";

export default function List({ list }) {
  return (
    <>
      <View style={styles.container}>
        {list.map((item, index) => (
          <View style={styles.listItem} key={index}>
            <View style={styles.indexItem}>
              <Text style={[styles.indexItem, styles.itemText]}>
                {index + 1}
              </Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: "#e2b497",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal:25
  },
  itemText: {
    color: "#351401",
    padding: 10,
  },
  indexItem: {
    borderRightColor: "#5d3e2d",
    borderRightWidth: 1,
  },
  container: {
    alignItems: "center",
    padding: 2,
  },
  textView:{
    flex:1
  }
});
