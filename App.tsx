import Home from './src/screens/home/index';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import ConcludedItemsProvider from './src/contexts';

const App = () => {

  const [fontsLoaded] = useFonts({
    'InterBold' : require('./src/assets/fonts/Inter-Bold.ttf'),
    'InterRegular' : require('./src/assets/fonts/Inter-Regular.ttf')
  })
  if (!fontsLoaded) return <AppLoading />

  return(
    <>
      <ConcludedItemsProvider>
        <StatusBar
        barStyle='light-content'
        backgroundColor={'transparent'}
        translucent/>
        <Home/>
      </ConcludedItemsProvider>
    </>
  )
  
}

export default App;