import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
} from 'react-native-svg';
import { IconType } from './type';
import React from 'react';

export function FacebookIcon(props: IconType) {
    return (
        <Svg
            width={23}
            height={22}
            viewBox="0 0 23 22"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_1525_327)">
                <Path
                    d="M9.685 21.89C4.46 20.955.5 16.445.5 11c0-6.05 4.95-11 11-11s11 4.95 11 11c0 5.445-3.96 9.955-9.185 10.89l-.605-.495h-2.42l-.605.495z"
                    fill="url(#paint0_linear_1525_327)"
                />
                <Path
                    d="M15.79 14.08l.495-3.08H13.37V8.855c0-.88.33-1.54 1.65-1.54h1.43V4.51c-.77-.11-1.65-.22-2.42-.22-2.53 0-4.29 1.54-4.29 4.29V11H6.99v3.08h2.75v7.755a10.127 10.127 0 003.63 0V14.08h2.42z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_1525_327"
                    x1={11.5005}
                    y1={21.2349}
                    x2={11.5005}
                    y2={-0.00405228}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#0062E0" />
                    <Stop offset={1} stopColor="#19AFFF" />
                </LinearGradient>
                <ClipPath id="clip0_1525_327">
                    <Path fill="#fff" transform="translate(.5)" d="M0 0H22V22H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
