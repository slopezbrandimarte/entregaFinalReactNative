import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

const ErrorCategories = () => {
  return (
    <View style={styles.containerMayor}>
        <View style={styles.container} >
            <MaterialIcons style={styles.icon} name="error-outline" size={100} color="black" />
            <Text style={styles.error}>Error al cargar los categorias</Text>
            
            <View style={styles.subError}>
                <Text style={styles.subErrorText}>Comuniquese con el servicion tecnico a la siguiente direccion </Text>
                <Text style={styles.subErrorText1}>email: slopezbrandimarte@gmail.com </Text>
            </View>
        </View>
    </View>
  )
}

export default ErrorCategories

const styles = StyleSheet.create({
    containerMayor:{
        flex: 1,
        justifyContent:"flex-start",
        flexDirection: 'column',
        alignItems: 'center',
    },
    container:{
        marginTop:15,
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        gap: 20,
    },
  
    error:{
        flexDirection:"column",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        color:"red",
        fontSize: 40,
    },
    subError:{
        width:"100%",
        marginVertical: 10,
    },
    subErrorText:{
        textAlign:"center",
        fontSize: 30,
    },
    subErrorText1:{
        textAlign:"center",
        fontSize: 15,
    }

})