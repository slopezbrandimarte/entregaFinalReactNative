import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from '../Global/colors'

const OrderItem = ({ order,navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
            <Text style={styles.text1}>{order.updateAt}</Text>
            <Text style={styles.text2}>Total: $ {order.total}</Text>
      </View>
      <Pressable onPress={()=> navigation.navigate("OrderDetail", {orderId: order.id}) }>
        <MaterialIcons name="search" size={45} color="black"/>
      </Pressable>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.verdeMenta,
        margin:5,
        padding:10,
        height:100,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        borderRadius:10,
        borderWidth:2,
    },
    textContainer:{
        width:"70",
        gap:5
    },
    text1:{
        fontSize:19,
        fontWeight:"bold",
        fontFamily:"Roboto"
    },
    text2:{
        fontSize:17,
        fontFamily:"Roboto"
    }
})