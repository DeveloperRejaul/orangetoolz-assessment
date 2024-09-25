import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './type';

export function BackIcon(props: IconType) {
    return (
        <Svg
            width={props.size || 18}
            height={props.size || 16}
            viewBox="0 0 18 16"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.356.276a1 1 0 01.035 1.414L3.333 7H17a1 1 0 110 2H3.333l5.058 5.31a1 1 0 01-1.448 1.38l-6.667-7a1 1 0 010-1.38l6.667-7A1 1 0 018.356.276z"
                fill={props.color || '#2C2B2A'}
            />
        </Svg>
    );
}
