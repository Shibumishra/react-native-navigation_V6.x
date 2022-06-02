import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator >
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen name="GameDetails" component={GameDetailsScreen} options={({ route }) => ({
                title: route.params?.title,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            })} />
        </Stack.Navigator>
    )
}

export default HomeStack;