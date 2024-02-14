import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory} from "../features/shop/shopSlice"

const CategoryItem = ({category,navigation}) => {

  const dispatch = useDispatch()

  return (
    <Pressable onPress={()=>{ 
        dispatch(setProductsFilteredByCategory(category))
        navigation.navigate("Category",{category})
      }}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"80%",
        marginHorizontal:"10%",
        marginTop:30,
        backgroundColor:colors.verdeMenta,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
      fontSize:25,
      fontFamily:"Roboto",  
    }
})