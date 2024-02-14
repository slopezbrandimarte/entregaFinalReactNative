import { StyleSheet, View,Image,Text } from 'react-native'
import AddButton from '../Components/AddButton'
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../app/services/shopServices'
import { useSelector } from 'react-redux'

const MyProfile = ({navigation}) => {
    const localId = useSelector(state => state.auth.value.localId)
    const {data} = useGetProfileImageQuery(localId)
    const {data:location} = useGetUserLocationQuery(localId)

    return (
        <View style={styles.container}>
            <Image
                source={data ? {uri:data.image} : require("../../assets/user.png")}
                style={styles.image}
                resizeMode='cover'
            />
            
            <AddButton title={data ? "Cambiar foto" : "Agregar foto"} onPress={()=> navigation.navigate("ImageSelector")}/>
            <AddButton title={location ? "Cambiar Ubicacion" : "Agregar Ubicacion"} onPress={()=> navigation.navigate("LocationSelector")}/>        
            <Text style={styles.text}>Direccion: {location?.address}</Text>
        
        </View>
    )
}


export default MyProfile


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:250,
        height:250,
        borderRadius:30,
    },
    text:{
        marginTop:30,
        fontWeight:"bold",
        textAlign: "center",
    }
    
})
