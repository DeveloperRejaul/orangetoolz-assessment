import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconType } from './type';

export function ShareIcon(props: IconType) {
  return (
    <Svg
      width={props.size || 16}
      height={props.size || 12}
      viewBox="0 0 16 12"
      fill="none"
      {...props}
    >
      <Path
        d="M15.087 5.842a.375.375 0 00-.014-.607L7.853.244A.225.225 0 007.5.429V2.83a.389.389 0 01-.296.371C1.537 4.64.66 9.933.524 11.537c-.012.145.17.21.264.1.813-.972 3.27-3.535 6.384-3.322a.358.358 0 01.328.362v2.453c0 .186.213.292.36.18l7.227-5.468z"
        fill={props.color || '#fff'}
      />
    </Svg>
  );
}
