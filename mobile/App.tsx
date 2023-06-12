import { StatusBar, Text, View } from "react-native";
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components/native";

import { Routes } from "@routes/index";
import { theme } from "@theme/index";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
      <Routes />
      {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontFamily: 'Inter_700Bold'}}>Porra funciona caralho</Text>
      </View> */}
    </ThemeProvider>
  );
};

export default App;
