import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TaskDetail from './components/TaskDetail';
import TaskEdit from './components/TaskEdit';
import TaskList from './components/TaskList';
import { TodoProvider } from './context';

const Stack = createStackNavigator();


export default function App() {

  return (
    <TodoProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="TaskDetail" component={TaskDetail} />
        <Stack.Screen name="TaskEdit" component={TaskEdit} />
      </Stack.Navigator>
    </NavigationContainer>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
