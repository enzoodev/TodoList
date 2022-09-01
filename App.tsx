import Home from './src/screens/home/index';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const App = () => {

  const [fontsLoaded] = useFonts({
    'InterBold' : require('./src/assets/fonts/Inter-Bold.ttf'),
    'InterRegular' : require('./src/assets/fonts/Inter-Regular.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return(
    <Home/>
  )
  
}

export default App;