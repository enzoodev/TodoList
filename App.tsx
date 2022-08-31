/* import {} from @expo-google-fonts/inter; */
import Home from './src/screens/home/index';
import { useFonts } from 'expo-font';

const App = () => {

  const [fontsLoaded] = useFonts({
    'Inter-Bold' : require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular' : require('./src/assets/fonts/Inter-Regular.ttf')
  })

  return(
    <Home/>
  )

}

export default App;