import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartsScreen from '../screens/CartsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
            <Tab.Screen
                name="Home2"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        <Ionicons
                            name='home-outline'
                            color={color}
                            size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartsScreen} options={{
                    tabBarIcon: ({ color, size }) => {
                        <Feather
                            name='shopping-bag'
                            color={color}
                            size={size} />
                    }
                }} />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen} options={{
                    tabBarIcon: ({ color, size }) => {
                        <Ionicons
                            name='heart-outline'
                            color={color}
                            size={size} />
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;