import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '../Navigation/AuthStack';
import AappStack from '../Navigation/AppStack';


function Router() {
    return (
        <NavigationContainer>
           {/* <AuthStack /> */}
           <AappStack />
        </NavigationContainer>
    );
}

export default Router;