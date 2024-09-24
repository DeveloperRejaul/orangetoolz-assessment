import React from 'react';
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';
import Login from '../../features/auth/Login';

export default function AuthStack(Stack: NativeStackNavigatorProps) {
    return <Stack.Screen name="auth" component={Login} />;
}
