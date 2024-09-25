import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './type';

export function SearchIcon(props: IconType) {
    return (
        <Svg
            width={props.size || 16}
            height={props.size || 16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.533 1.75a5.783 5.783 0 100 11.567 5.783 5.783 0 000-11.567zm5.619 10.418a7.283 7.283 0 10-1.069 1.053l2.396 2.318a.75.75 0 101.043-1.078l-2.37-2.293z"
                fill={props.color || '#787573'}
            />
        </Svg>
    );
}
