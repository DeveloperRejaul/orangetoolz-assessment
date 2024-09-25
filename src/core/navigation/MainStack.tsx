import React from 'react';
import Home from '../../features/home/Home';
import Details from '../../features/home/details';

export default function MainStack(Stack: any) {
    return <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
    </>;
}
