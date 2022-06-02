import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CartsScreen from '../screens/CartsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: "#AD40AF"},
            tabBarActiveTintColor: '#fff',
            tabBarActiveTintColor: 'yellow'
        }}>
            <Tab.Screen
                name="Home2"
                component={HomeStack}
                options={({route}) =>  ({
                    tabBarStyle: {display: getTabVisibility(route), backgroundColor: "#AD40AF"},
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='home-outline'
                            color={color}
                            size={size} />
                    )
                })}
            />
            <Tab.Screen
                name="Cart"
                component={CartsScreen} options={{
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {backgroundColor: 'yellow'},
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name='shopping-bag'
                            color={color}
                            size={size} />
                    )
                }} />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='heart-outline'
                            color={color}
                            size={size} />
                   )
                }} />
        </Tab.Navigator>
    )
}

const getTabVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

    if(routeName == 'GameDetails'){
        return 'none';
    }
    return 'flex';
}

export default BottomTabNavigator;