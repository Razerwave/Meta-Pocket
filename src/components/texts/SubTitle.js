import React from 'react'
import styled from 'styled-components/native';
import { fontBody } from '../../constants/fonts';

const SubTitle = (props) => {
  return (
    <StyledSubTitle {...props} />
  )
}

const StyledSubTitle = styled.Text`
  font-family: ${fontBody};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.subTitleColor};
`

export default SubTitle