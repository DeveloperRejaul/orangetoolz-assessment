import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './type';

export function MoreIcon(props: IconType) {
    return (
        <Svg
            width={props.size || 4}
            height={props.size || 16}
            viewBox="0 0 4 16"
            fill="none"
            {...props}
        >
            <Path
                d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                fill={props.color || '#AAA7A6'}
            />
        </Svg>
    );
}
