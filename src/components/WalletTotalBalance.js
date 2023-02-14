import styled from 'styled-components/native';
import bg from '../assets/images/wallet-total-balance-bg.png';
import StyledText from './texts/StyledText';

const WalletTotalBalance = () => {
  return (
    <Wrapper>
      <Background source={bg}>
        <Outer>
          <LabelText>Total value</LabelText>
          <StyledText>$18.254</StyledText>
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
  aspect-ratio: 1;
`;

const LabelText = styled(StyledText)`
  font-size: 12px;
`;

export default WalletTotalBalance;
