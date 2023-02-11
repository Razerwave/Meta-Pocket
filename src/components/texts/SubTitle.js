import React from 'react'
import styled from 'styled-components/native';

const SubTitle = (props) => {
  return (
    <StyledSubTitle {...props} />
  )
}

const StyledSubTitle = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.fonts.subTitleColor};
`

export default SubTitle