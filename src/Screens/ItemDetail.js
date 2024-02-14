import { StyleSheet, Text, View , Pressable,Dimensions, Image, FlatList, ActivityIndicator, ToastAndroid} from 'react-native'
import { colors } from '../Global/colors'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'
import { useGetProductQuery } from '../app/services/shopServices'
import React from 'react'



const ItemDetail = ({route}) => {
  const {id} = route.params
  const dispatch = useDispatch()
  const {data:product,isLoading} = useGetProductQuery(id)
  if(isLoading) return <ActivityIndicator size="large"/>

  const width = Dimensions.get("window").width
  const anchoContenedor = width 

  const showToast = ()=>{
    ToastAndroid.show("producto agregado al carrito", ToastAndroid.LONG)
  } 
  const addCart = () => {
    dispatch(addItem(product))
    showToast()
  }
    
  return (
    <View style={styles.container}>
      <View style={styles.content} >
        <FlatList        
          data={product.images}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={anchoContenedor} 
          scrollEventThrottle={16}
          keyExtractor={(item)=> item.toString()}
          renderItem={({item}) => {
            return (
              <View style={{width: width }}>
                <View style={{
                  backgroundColor:"#fff",
                  alignItems:"center"
                }}>
                  <Image source={{uri:item}} style={styles.posterImage} resizeMode='contain' height={200}/>
                </View>
              </View>
            )
          }}
        />

          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow} onPress={addCart}>
              <Text style={styles.buyNowText}>Agregar al carrito</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:2,
        justifyContent:"start",
        alignItems:"center",
        backgroundColor:colors.beigeNatural,
        marginTop:20,
    },
    content:{
      width:"100%"
    },
    posterImage: {
      width:"100%",
      resizeMode:"cover",
      margin:0,
      marginBottom:0,

    },

    image:{
      width:"100%",
      height:300
    },
    goBack:{
      width:"100%",
      backgroundColor:"black",
      padding:10,
      paddingStart:40
    },
    containerText:{
      gap:25,
      paddingHorizontal:5,
      paddingVertical:25
    },
    containerPrice:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10
    },
    title:{
      fontSize:30,
      textAlign:"center",
      fontWeight:"bold"
    },
    description:{
      fontSize:20,
      textAlign:"center",
    },
    price:{
      fontSize:30
    },
    buyNow:{
      backgroundColor:colors.verdeMenta,
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:15
    },
    buyNowText:{
      color:"black",
      fontWeight:"bold"
    }
})