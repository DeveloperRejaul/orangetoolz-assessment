import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './type';

export function SaveIcon(props: IconType) {
    return (
        <Svg
            width={14}
            height={16}
            viewBox="0 0 14 16"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 .313c.519 0 .938.42.938.937v6.696l1.83-1.825a.937.937 0 111.324 1.327L7.663 10.87a.938.938 0 01-1.324 0l-3.43-3.422a.938.938 0 011.326-1.327l1.828 1.825V1.25c0-.518.42-.938.938-.938zm6 9.153c.518 0 .938.42.938.937v2.766c0 .653-.246 1.288-.697 1.763a2.4 2.4 0 01-1.741.755h-9a2.4 2.4 0 01-1.74-.755 2.562 2.562 0 01-.697-1.763v-2.766a.938.938 0 111.875 0v2.766c0 .186.07.355.181.473.11.115.248.17.381.17h9c.133 0 .27-.055.38-.17a.688.688 0 00.182-.473v-2.766c0-.517.42-.937.938-.937z"
                fill="#2C2B2A"
            />
        </Svg>
    );
}
