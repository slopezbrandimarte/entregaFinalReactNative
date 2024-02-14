import { Pressable, StyleSheet, Text, View} from 'react-native'
import { colors } from '../Global/colors'
import {MaterialIcons} from '@expo/vector-icons'
import { deleteAllSession } from '../database'
import { useSelector,useDispatch } from 'react-redux'
import { clearUser } from '../features/auth/authSlice'

const Header = ({title = "Producto"}) => {
  const dispatch = useDispatch()
  const localId = useSelector(state => state.auth.value.localId)
  const showToast = ()=>{
    ToastAndroid.show("Sesion Finalizada", ToastAndroid.LONG)
  }
  const onLogout = () =>{
    deleteAllSession().then(result => showToast(result))
    dispatch(clearUser())
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>{title}</Text>
      {localId && <Pressable onPress={onLogout} style={styles.logoutIcon}>
                      <MaterialIcons name='logout' size={30} color="black"/>
                  </Pressable>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.green1,
      width:"100%",
      height:60,
      justifyContent:"center",
      alignItems:"center"
    },
    text:{
      fontSize:20,
      fontFamily:"OpenSans",
    },
    logoutIcon:{
      position:"absolute",
      right:10
    }
})
