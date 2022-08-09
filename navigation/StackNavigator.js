import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import OpSelect from "../screens/OpSelScreen"
import Home from "../screens/HomeScreen"
import Addition from "../screens/Addition/AddMainScreen"
import Add22 from "../screens/Addition/Add22Dig"
import Add21 from "../screens/Addition/Add21Dig"
import Add11 from "../screens/Addition/Add11Dig"
import Subtraction from "../screens/Subtraction/SubMainScreen"
import Sub21 from "../screens/Subtraction/Sub21Dig"
import Sub22 from "../screens/Subtraction/Sub22Dig"
import Multiplication from "../screens/Multiplication/MulMainScreen"
import Mul120 from "../screens/Multiplication/Mul120"
import Mul110 from "../screens/Multiplication/Mul110"

const Stack = createStackNavigator()
const StackNavigator = ()=>{
  return(
    <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown:false}}>
    <Stack.Screen name = "Home" component = {Home} />
    <Stack.Screen name = "test" component = {OpSelect} />
    <Stack.Screen name = "Add" component = {Addition} />
    <Stack.Screen name = "A22" component = {Add22} />
    <Stack.Screen name = "A21" component = {Add21} />
    <Stack.Screen name = "A11" component = {Add11} />
    <Stack.Screen name = "Sub" component = {Subtraction} />
    <Stack.Screen name = "S21" component = {Sub21} />
    <Stack.Screen name = "S22" component = {Sub22} />
    <Stack.Screen name = "Mtp" component = {Multiplication} />
    <Stack.Screen name = "M120" component = {Mul120}/>
    <Stack.Screen name = "M110" component = {Mul110}/>


    </Stack.Navigator>
  )
  }

  export default StackNavigator