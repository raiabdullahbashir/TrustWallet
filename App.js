import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Legal from './src/components/screens/Legal/Legal';
import AddToken from './src/components/screens/AddToken/AddToken';
import AddCustomToken from './src/components/screens/AddCustomToken/AddCustomToken';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          options={{
            title: 'Add Custom Token',

            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons name="arrow-back-sharp" size={30} color="#3275BB" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Text style={styles.text}>DONE</Text>
              </TouchableOpacity>
            ),
          }}
          name="AddCustomToken"
          component={AddCustomToken}
        />
        <Stack.Screen
          options={{
            title: 'Legal',

            headerStyle: {
              backgroundColor: '#4695E7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
              textAlign: 'center',
              alignSelf: 'center',
              flex: 1,
            },
          }}
          name="Legal"
          component={Legal}
        />
        <Stack.Screen
          options={{
            title: 'Add Token',

            headerStyle: {
              backgroundColor: '#4695E7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Ionicons name="add-sharp" size={30} color="#fff" />
              </TouchableOpacity>
            ),
          }}
          name="AddToken"
          component={AddToken}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
  },
  text: {
    color: '#3275BB',
  },
});

export default App;
