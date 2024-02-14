import { StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../Global/colors'

const AddButton = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}
export default AddButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.verdeMenta,
        width:"70%",
        paddingVertical:8,
        margin:10,
        borderRadius:15
    },
    text:{
        textAlign:"center",
        fontSize:18
    }
})
