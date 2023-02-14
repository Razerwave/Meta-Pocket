import styled from 'styled-components';

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;

const StyledDivider = styled.View`
  border: 1px solid ${props => props.theme.dividerColor};
`;

// const styles = StyleSheet.create({
//   divider: {
//     borderWidth: 1,
//     borderStyle: 'solid',
//     borderColor: '#D9D9D9',
//   }
// })
