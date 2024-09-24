import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from './AuthRoute';

const Stack = createNativeStackNavigator();

export function MainRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <>{AuthRoute(Stack)}</>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
