import React from 'react';
import ButtonPrimary from './buttons/ButtonPrimary';
import LayoutScreen from './layouts/LayoutScreen';
import LayoutScroll from './layouts/LayoutScroll';
import styled from 'styled-components/native';
import {black, neutral100, neutral300, white} from '../constants/colors';
import BodyHeading from './texts/BodyHeading';
import BodyText from './texts/BodyText';
import {View, Image} from 'react-native';
import FixedThemeWrapper from './theme/FixedThemeWrapper';
import Stack from './Stack';
import {useTheme} from 'styled-components';

const ActionInfoBorder = ({children, style}) => {
  const {backgroundColor} = useTheme();
  return (
    <FixedThemeWrapper
      style={{
        marginHorizontal: 17,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderStyle: 'dotted',
        borderColor: backgroundColor,
        backgroundColor: white,
        ...style,
      }}>
      {children}
    </FixedThemeWrapper>
  );
};

export default ActionInfoBorder;
