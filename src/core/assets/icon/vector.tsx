import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { IconType } from './type';

export function Vector(props: IconType) {
    return (
        <Svg
            width={242}
            height={232}
            viewBox="0 0 242 232"
            fill="none"
            {...props}
        >
            <Path
                d="M245.791-9.63c-18.834-2.722-54.665 8.368-47.328 74.495 9.172 82.659 103.093-2.857 15.409-27.757-87.684-24.9-31.918 117.764-107.312 119.397C31.167 158.137 40.339 187.936 2 231"
                stroke="url(#paint0_linear_1501_1168)"
                strokeWidth={3}
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1501_1168"
                    x1={296.65}
                    y1={104.762}
                    x2={78.6831}
                    y2={234.046}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFD910" />
                    <Stop offset={0.817708} stopColor="#ED7549" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
