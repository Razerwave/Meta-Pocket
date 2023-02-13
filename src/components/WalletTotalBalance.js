import styled from 'styled-components/native';
import bg from '../assets/images/wallet-total-balance-bg.png';
import StyledText from './texts/StyledText';

const WalletTotalBalance = () => {
  return (
    <Wrapper>
      <Background source={bg}>
        <Outer>
          <StyledText>Total value</StyledText>
          <StyledText>$0.00</StyledText>
        </Outer>
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 80%;
  text-align: center;
`;

const Background = styled.ImageBackground`
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Outer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
`;

export default WalletTotalBalance;
