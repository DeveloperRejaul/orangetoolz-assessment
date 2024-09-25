
import React from 'react';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { useAppSelector } from '../hooks/rtk';


export default function AuthRoute(Stack: any) {
    const isLogin = useAppSelector(state => state.auth.isLogin);
    return isLogin ? <>{MainStack(Stack)}</> : <>{AuthStack(Stack)}</>;
}
