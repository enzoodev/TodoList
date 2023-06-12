import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { CreateTask } from '@screens/CreateTask';
import { EditTask } from '@screens/EditTask';


const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="CreateTask" component={CreateTask} />
      <Screen name="EditTask" component={EditTask} />
    </Navigator>
  );
}
