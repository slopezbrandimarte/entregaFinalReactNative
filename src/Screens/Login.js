import {useState ,useEffect} from 'react'
import { View, Text ,StyleSheet, Pressable} from 'react-native'
import { colors } from '../Global/colors'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { insertSession } from '../database'
import LoadingSpinner from '../Components/LoadingSpinner'




const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerLogin,{data,isError,isSuccess,error,isLoading}] = useLoginMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loginError,setLoginError] = useState("")

  useEffect(()=>{
    if(isSuccess) {
      dispatch(setUser(data))
      insertSession(data)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    if(isLoading) return <LoadingSpinner/>
    if(isError) setLoginError('ingrese un correo electronico y una contraseña')
  },[data,isError,isSuccess])


  const onSubmit = () => {
   
    triggerLogin({email,password})
  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Login to start</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure = {false}
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
          />
          {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
          <SubmitButton onPress={onSubmit} title="Send"/>
          <Text style={styles.sub}>Not have an account?</Text>
          <Pressable onPress={()=> navigation.navigate("Signup")} >
              <Text style={styles.subLink}>Sign up</Text>
          </Pressable>
      </View>
    </View>
  )
}


export default Login


const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:colors.beigeNatural,
    },
    container:{
      width:"90%",
      backgroundColor:colors.verdeMenta,
      gap:15,
      borderRadius:35,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontSize:22,
      fontFamily:"Montserrat",
      fontWeight:"bold",
    },
    sub:{
      fontSize:14,
      fontFamily:"Roboto",
      fontWeight:"bold",
    },
    subLink:{
      fontSize:14,
      fontFamily:"Roboto",
      fontWeight:"bold",
      color:"blue"
    },
    errorText: {
      color: 'red',
      fontFamily: 'Roboto',
      fontSize: 15,
      marginBottom: 10,
      fontWeight:"bold",
     }
})
