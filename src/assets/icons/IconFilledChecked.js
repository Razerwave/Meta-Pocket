import React from 'react';
import {useTheme} from 'styled-components';
import {Path, Svg, Circle} from 'react-native-svg';

const IconFilledChecked = ({color, fillColor}) => {
  const {fontColor} = useTheme();
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="12" cy="12" r="12" fill={fillColor || fontColor} />
      <Path
        d="M9.52269 16.7487C9.91286 17.1413 10.5477 17.1422 10.939 16.7509L18.0297 9.66016C18.4096 9.28029 18.4062 8.66337 18.0222 8.2877C17.6441 7.91782 17.0388 7.92115 16.6647 8.29516L10.9369 14.023C10.5464 14.4135 9.9132 14.4135 9.52268 14.023L7.3058 11.8061C6.93245 11.4328 6.32712 11.4328 5.95377 11.8061C5.58121 12.1787 5.5803 12.7824 5.95173 13.1561L9.52269 16.7487Z"
        fill={color || '#000000'}
      />
    </Svg>
  );
};

export default IconFilledChecked;
