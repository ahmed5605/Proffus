/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home'
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

import Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors.GREEN,
                }}
            >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: true,
                    headerTitle: 'Proffus',
                    headerTitleStyle: {fontSize: 24},
                    headerTitleAlign: 'center',
                    tabBarLabel: '',
                    tabBarLabel: 'Home',
                    tabBarColor: '#272A28',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarLabel: 'Profile',
                    tabBarColor: '#272A28',
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarLabel: 'Settings',
                    tabBarColor: '#272A28',
                    tabBarIcon: ({ color }) => (
                        <Icon name="setting" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

