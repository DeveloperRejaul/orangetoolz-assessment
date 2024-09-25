import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './type';

export function LogoutIcon(props: IconType) {
    return (
        <Svg
            width={props.size || 22}
            height={props.size || 19}
            viewBox="0 0 22 19"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.885 8.618a1.25 1.25 0 010 1.766l-4.564 4.571a1.25 1.25 0 01-1.769-1.766l2.434-2.438H8.057a1.25 1.25 0 110-2.5h8.93l-2.435-2.439a1.25 1.25 0 011.77-1.766l4.563 4.572zM9.045 1.5c0 .69-.559 1.25-1.25 1.25H4.108a.917.917 0 00-.63.242.7.7 0 00-.227.508v12a.7.7 0 00.228.508.917.917 0 00.63.242h3.688a1.25 1.25 0 110 2.5H4.107c-.87 0-1.716-.327-2.35-.93A3.2 3.2 0 01.75 15.5v-12a3.2 3.2 0 011.007-2.32 3.416 3.416 0 012.35-.93h3.689c.69 0 1.25.56 1.25 1.25z"
                fill={props.color || '#FB5200'}
            />
        </Svg>
    );
}
