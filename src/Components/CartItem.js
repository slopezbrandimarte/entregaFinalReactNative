import { Pressable, StyleSheet, Text, View, ToastAndroid} from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { colors } from '../Global/colors'
import { removeItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const showToast = ()=>{
        ToastAndroid.show("Producto eliminado del carrito", ToastAndroid.LONG)
    } 
    const eliminar = ()=>{
        dispatch(removeItem({ id: item.id }))
        showToast()
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{item.title}</Text>
                <Text  style={styles.text2}>{item.brand}</Text>
                <Text  style={styles.text2}>Cantidad: {item.quantity} Precio $ {item.price}</Text>
            </View>
            <Pressable onPress={eliminar}>
                <Entypo name='trash' size={25} color="black"/>
            </Pressable>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.verdeMenta,
        margin:10,
        padding:10,
        height:100,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        borderWidth:2
    },
    textContainer:{
        width:"70",

    },
    text1:{
        fontSize:19,
        color:"black",
        fontFamily:"Roboto"
    },
    text2:{
        fontSize:17,
        color:"black",
        fontFamily:"Roboto"
    }

})