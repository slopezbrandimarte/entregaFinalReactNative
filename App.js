import { StatusBar, ToastAndroid } from 'react-native'
import { useFonts } from "expo-font"
import { fonts } from './src/Global/fonts'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'
import { init } from './src/database'

const showToast = (mensaje)=>{
  ToastAndroid.show(mensaje, ToastAndroid.LONG)
}

init()
.then(() => showToast("Base de datos inicializada"))
.catch(err => showToast("Error en la carga de la base de datos",err))

const  App = () => {

  const [fontLoaded] = useFonts(fonts)
  if(!fontLoaded) return null
  
  return (
    <>
      <StatusBar backgroundColor="black"/>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    
    </>
  )
}

export default App


