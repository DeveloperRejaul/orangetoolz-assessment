import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './type';

export function GoogleIcon(props: IconType) {
    return (
        <Svg
            width={23}
            height={22}
            viewBox="0 0 23 22"
            fill="none"
            {...props}
        >
            <Path
                d="M11.714 9v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31l3.57 2.77c2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25h-10.36z"
                fill="#4285F4"
            />
            <Path
                d="M5.549 13.094l-.805.616-2.85 2.22c1.81 3.59 5.52 6.07 9.82 6.07 2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53l-.005-.006z"
                fill="#34A853"
            />
            <Path
                d="M1.894 6.07C1.144 7.55.714 9.22.714 11c0 1.78.43 3.45 1.18 4.93 0 .01 3.66-2.84 3.66-2.84-.22-.66-.35-1.36-.35-2.09 0-.73.13-1.43.35-2.09l-3.66-2.84z"
                fill="#FBBC05"
            />
            <Path
                d="M11.714 4.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.164 1.09 14.684 0 11.714 0c-4.3 0-8.01 2.47-9.82 6.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
            />
        </Svg>
    );
}
