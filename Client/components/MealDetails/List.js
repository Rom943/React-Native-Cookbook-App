import { Text, View, StyleSheet } from "react-native";

export default function List({ list }) {
  return (
    <>
      <View style={styles.container}>
        {list.map((item, index) => (
          <View style={styles.listItem} key={index}>
            <View style={styles.indexItem}>
            <Text style={[ styles.indexItem,styles.itemText]}>{index+1}</Text>
            </View>
           
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: "#e2b497",
    margin: 5,
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    
  },
  itemText: {
    color: "#351401",
    margin:10,
  },
  indexItem: {
    borderRightColor: "#5d3e2d",
    borderRightWidth: 1,
  },
  container:{
    alignItems:"center"
  }
});
