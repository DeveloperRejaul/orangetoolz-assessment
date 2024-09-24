import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './type';

export function Group(props: IconType) {
    return (
        <Svg
            width={55}
            height={36}
            viewBox="0 0 55 36"
            fill="none"
            {...props}
        >
            <Path
                d="M30.73 8.12c6.384-.653 8.346 11.723 8.346 11.723s10.685-7.535 14.42-3.248c3.736 4.288-17.306 15.476-18.413 13.975-4.457-6.042-10.086-21.863-4.353-22.45zM15.685.984c-4.972 1.213-3.145 11.037-3.145 11.037S2.5 9.21.836 13.428c-1.664 4.219 17.135 7.014 17.567 5.59 1.738-5.73 1.748-19.122-2.718-18.034z"
                fill="#F9DB4A"
            />
        </Svg>
    );
}
