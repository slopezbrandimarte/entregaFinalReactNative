import { StyleSheet, Text,Pressable } from 'react-native'
import { colors } from '../Global/colors'


const SubmitButton = ({title,onPress}) => {
   
  return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}


export default SubmitButton


const styles = StyleSheet.create({
    button:{
        width:"60%",
        backgroundColor:colors.grisClaro,
        padding:10,
        alignItems:"enter",
        borderRadius:10
    },
    text:{
        textAlign:"center",
        fontSize:18
    }
})
