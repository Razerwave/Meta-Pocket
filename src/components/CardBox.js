import styled from 'styled-components/native';

const CardBox = styled.View`
  padding: 16px 16px 26px 16px;
  background-color: ${props => props.theme.backgroundCardColor};
  border: 1px solid ${props => props.theme.card.border};
`;

export default CardBox;
