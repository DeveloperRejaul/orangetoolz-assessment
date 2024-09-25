import React from 'react';
import Login from '../../features/auth/Login';

export default function AuthStack(Stack: any) {
    return <>
        <Stack.Screen name="auth" component={Login} />
    </>;
}
