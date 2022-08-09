import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './navigation/StackNavigator'

export default function App() {
  return (
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
  );
}
