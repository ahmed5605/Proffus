/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, Text, Platform, StatusBar, LogBox, Button, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import Product from '../screens/Product';

import Shop from 'react-native-vector-icons/FontAwesome5';
import Colors from '../styles/Colors';

LogBox.ignoreAllLogs(true);
const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="tab" >
            <Stack.Screen
                name="tab"
                component={TabNavigator}
                options={{headerShown: false }}
            />
            <Stack.Screen
                name="product"
                component={Product}
                options={{
                    headerShown: true,
                    headerTitle: 'Product Details',
                    headerTitleStyle: {fontSize: 22, color: Colors.BLACK},
                    headerTintColor: Colors.GREEN,
                    headerTitleAlign: 'left',
                    headerRight: () => (
                        <Shop name="shopping-bag" color={Colors.GREEN} style={{marginRight: 10}} size={26} />
                    )
                }}
            />
        </Stack.Navigator>
    );
}
