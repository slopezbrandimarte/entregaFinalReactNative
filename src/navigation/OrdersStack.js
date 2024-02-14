import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Orders from '../Screens/Orders'
import OrderDetail from '../Screens/OrderDetail'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={
                ()=>{
                    return {
                        header : () => <Header title="Ordenes"/>
                    }
                }
            }
        >
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="OrderDetail" component={OrderDetail}/>
        </Stack.Navigator>
    )
}

export default OrdersStack
