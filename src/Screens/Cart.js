import { StyleSheet, Text, View,FlatList, Pressable, ToastAndroid } from 'react-native'
import CartItem from '../Components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../app/services/shopServices'
import { clearCart } from '../features/cart/cartSlice'

const Cart = ({ navigation }) => {
    const localId = useSelector(state => state.auth.value.localId)
    const cart = useSelector(state => state.cart.value)
    const [triggerPostOrder] = usePostOrdersMutation()
    const dispatch = useDispatch()
    const showToast = ()=>{
        ToastAndroid.show("La compra fue confirmada", ToastAndroid.LONG)
    }
    const confirmCompra = () => {
        triggerPostOrder({localId, order:cart})
        showToast()
        dispatch(clearCart())
        navigation.navigate('OrdersStack', { screen: 'Orders' })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cart.items}
                keyExtractor={item => item.id}
                renderItem={({item})=> <CartItem item={item}/>}
            />
            <View style={styles.confirmContainer}>
                <Pressable onPress={confirmCompra}>
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
                <Text style={styles.text}>Total: $ {cart.total} </Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:70
    },
    confirmContainer:{
        backgroundColor:"grey",
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        color:"white",
        fontFamily:"OpenSans"
    }
})