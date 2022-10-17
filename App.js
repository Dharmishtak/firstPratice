import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import { ScreenStackHeaderLeftView } from 'react-native-screens';



const Stack = createNativeStackNavigator();
{
  Home: HomeScreen
  Components: ComponentsScreen
  List: ListScreen
  Image: ImageScreen
  Counter: CounterScreen
  Color: ColorScreen
  Square: SquareScreen
  Text: TextScreen
  Box: BoxScreen


}

function MyStack() {
  return(
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Components' component={ComponentsScreen} />  
    <Stack.Screen name='List' component={ListScreen} />  
    <Stack.Screen name='Image' component={ImageScreen} />
    <Stack.Screen name='Counter' component={CounterScreen} />
    <Stack.Screen name='Color' component={ColorScreen} />
    <Stack.Screen name='Square' component={SquareScreen} />
    <Stack.Screen name='Text' component={TextScreen} />
    <Stack.Screen name='Box' component={BoxScreen} />

    
  </Stack.Navigator>
  </NavigationContainer>
  );
}


export default MyStack;