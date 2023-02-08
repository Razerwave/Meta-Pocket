import styled from 'styled-components/native';

const StyledText = styled.Text`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.fontColor};
`

export default StyledText