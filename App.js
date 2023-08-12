// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './src/Screens/HomeScreen.js';
import MarketScreen from './src/Screens/MarketScreen.js';
import StandScreen from './src/Screens/StandScreen.js';
import SplashScreen from './src/Screens/SplashScreen.js';
import ChooseColorScreen from './src/Screens/ChooseColorScreen.js';
import SunScreen from './src/Screens/SunScreen.js';
import SlapScreen from './src/Screens/SlapScreen.js';
import HappyScreen from './src/Screens/HappyScreen.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Splash">
      
        <Stack.Screen  
         options={{
          title: 'Home',
          headerShown: false
        }}
        name="Home" component={HomeScreen} />
        <Stack.Screen 
         options={{
         
          headerShown: false
        }}
        headerShown="false" name="Market" component={MarketScreen} />
        <Stack.Screen   headerShown="false"name="Stand" component={StandScreen} />
        <Stack.Screen  headerShown="false" name="Splash" component={SplashScreen} />
        <Stack.Screen  headerShown="false" name="ChooseColorScreen" component={ChooseColorScreen} />
        <Stack.Screen  headerShown="false" name="SunScreen" component={SunScreen} />
        <Stack.Screen  headerShown="false" name="SlapScreen" component={SlapScreen} />
        <Stack.Screen  headerShown="false" name="HappyScreen" component={HappyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;