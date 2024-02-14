import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"

const TabIcon = ({icon,label,focused}) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={30} color={focused ? "black" : "gray"}/>
      <Text style={{...styles.text,...{color:focused ? "black" : "gray"}}}>{label}</Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        textAlign:"center",
        fontSize:18,
    }
})