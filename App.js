/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListRepo from './src/screens/ListRepo';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ListRepo/>
    // <Home/>
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Feed"
    //     tabBarOptions={{
    //       activeTintColor: '#e91e63',
    //     }}
    //   >
    //     <Tab.Screen
    //       name="Feed"
    //       component={Home}
    //       options={{
    //         tabBarLabel: 'Home',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="home" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //     {/* <Tab.Screen
    //       name="Notifications"
    //       component={Notifications}
    //       options={{
    //         tabBarLabel: 'Updates',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="bell" color={color} size={size} />
    //         ),
    //         tabBarBadge: 3,
    //       }}
    //     /> */}
    //     {/* <Tab.Screen
    //       name="Profile"
    //       component={Profile}
    //       options={{
    //         tabBarLabel: 'Profile',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="account" color={color} size={size} />
    //         ),
    //       }}
    //     /> */}
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default App;
