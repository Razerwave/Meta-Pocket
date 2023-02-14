import React from 'react';
import {useTheme} from 'styled-components';
import {Path, Svg} from 'react-native-svg';
import {gray100} from '../../constants/colors';

const IconDappArrow = () => {
  const {fontColor} = useTheme();
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.28718 12.6975C7.10244 12.8499 6.83559 12.8499 6.65085 12.6975L6.46758 12.5464C6.22514 12.3464 6.22514 11.9749 6.46758 11.775L9.99439 8.86571C10.2368 8.66572 10.2368 8.29428 9.99439 8.09429L6.46758 5.18504C6.22514 4.98505 6.22514 4.61362 6.46758 4.41363L6.65085 4.26246C6.83559 4.11006 7.10244 4.11006 7.28718 4.26246L11.9324 8.09429C12.1749 8.29428 12.1749 8.66572 11.9324 8.86571L7.28718 12.6975Z"
        fill={gray100}
      />
    </Svg>
  );
};

export default IconDappArrow;
