import { Pressable, StyleSheet, View } from "react-native";
import {Ionicons} from "@expo/vector-icons"

export default function IconButton ({icon,onPress}) {
  return (
    <Pressable style={({pressed})=>pressed && styles.pressed} onPress={onPress}>
        <Ionicons name={icon} size={30} color="white"/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.1,
        
    }
})