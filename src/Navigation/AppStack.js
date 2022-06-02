import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreens';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const AappStack = () => {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name='home-outline'
                            size={22}
                            color={color} />
                    )
                }} />
            <Drawer.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name='person-outline'
                            size={22}
                            color={color} />
                    )
                }} />
            <Drawer.Screen
                name='Messages'
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name='chatbox-ellipses-outline'
                            size={22}
                            color={color} />
                    )
                }} />
            <Drawer.Screen
                name='Moments'
                component={MomentsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name='timer-outline'
                            size={22}
                            color={color} />
                    )
                }} />
            <Drawer.Screen
                name='Settings'
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name='settings-outline'
                            size={22}
                            color={color} />
                    )
                }} />
        </Drawer.Navigator>
    )
}

export default AappStack;