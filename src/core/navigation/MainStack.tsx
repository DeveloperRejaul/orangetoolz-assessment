import React from 'react';
import Home from '../../features/home/Home';
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';

export default function MainStack(Stack: NativeStackNavigatorProps) {
    return <Stack.Screen name="Home" component={Home} />;
}
