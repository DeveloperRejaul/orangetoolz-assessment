
import React from 'react';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const isLogin = true;
export default function AuthRoute(Stack: any) {
    return isLogin ? <>{MainStack(Stack)}</> : <>{AuthStack(Stack)}</>;
}
