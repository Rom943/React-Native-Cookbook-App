import {Text,View,StyleSheet} from 'react-native'

export default function MealDetails({duration,complexity,affordability,styleProp}){
    const detailsProps =[duration+"m",complexity,affordability]
    return (
        <View style={styles.details}>
            {detailsProps.map((prop,index)=><Text key={index} style={[styleProp,styles.text]}> -{prop}</Text>)}
      </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        margin: 4,
        color:"white"
      },
      text:{
        fontSize:18
      }
})