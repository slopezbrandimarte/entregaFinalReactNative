import { StyleSheet, Text, View } from 'react-native'
import { useGetOrdersQuery } from '../app/services/shopServices'
import { useSelector } from 'react-redux'
import { colors } from '../Global/colors'


const OrderDetail = ({ route }) => {
    const { orderId } = route.params
    const localId = useSelector(state => state.auth.value.localId)
    const { data: orders, isLoading, isError, error } = useGetOrdersQuery(localId)

    if (isLoading) return <LoadingSpinner size="large" />
    if (isError) return <View><Text>Error al cargar: {error.error}</Text></View>

    const order = orders.find(order => order.id === orderId)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles de la orden:</Text>
            {order && (
                <View>
                    <Text style={styles.text} >Identificador de la orden: {order.id}</Text>
                    <Text style={styles.text}>Total: {order.total}</Text>
                    <Text style={styles.text}>Fecha de pedido: {order.updateAt}</Text>
                    <Text style={styles.title}>Productos:</Text>
                    {order.items.map((product, index) => (
                        <View style={styles.viewProductos} key={index}>
                            <Text style={styles.text}>{product.title}</Text>
                            <Text style={styles.text}>Cantidad: {product.quantity}</Text>
                            <Text style={styles.text}>Precio: {product.price}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.beigeNatural,
        paddingHorizontal: 10, 
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign:"center"
    },
    viewProductos:{
        width: '100%',
        padding: 10,
        backgroundColor:colors.verdeMenta,
        borderWidth: 1,
        borderRadius: 5,
    },
    text:{
        fontSize:20
    }
})