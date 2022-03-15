/**Homes Away 4RM Home
 Hotel/Accommidation (Reservation Uploads)
 **/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';
import Home from './src/Screens/Home';
import ForgotPassword from './src/Screens/ForgotPassword';
import HotelDetails from './src/Screens/HotelDetails';
import Booking from './src/Screens/Booking';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen         name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp" 
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        /> 

        

        <Stack.Screen
          name="HotelDetails"
          component={HotelDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
