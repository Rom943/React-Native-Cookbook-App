import { Text, View, StyleSheet } from "react-native";

export default function List({ list }) {
  return (
    <>
      {list.map((item, index) => (
        <View style={styles.listItem} key={index}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:40,
        backgroundColor:"#e2b497"
    },
    itemText:{
        color:"#351401",
        textAlign:"center"
    }
});
