import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import AppStackRoutes from "./App/index.routes";
import { useTheme } from "styled-components/native";

export const Routes: React.FC = () => {
    const theme = useTheme()
    
    return(
        <View style={{flex: 1, backgroundColor: theme.colors.gray600}}>
            <NavigationContainer>
                <AppStackRoutes />
            </NavigationContainer>
        </View>
    )
}