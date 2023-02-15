import styled from 'styled-components/native';
import bg from '../assets/images/wallet-total-balance-bg.png';
import BodyHeading from './texts/BodyHeading';
import BodyText from './texts/BodyText';
import { TouchableOpacity } from 'react-native'
import { currency } from '../utils/formats';

const WalletTotalBalance = ({total, onPress}) => {
  return (
    <Wrapper>
      <TouchableOpacity onPress={onPress} disabled={!onPress}>
        <Background source={bg}>
          <Outer>
            <BodyText type={5}>Total value</BodyText>
            <BodyHeading type={4}>${currency(total)}</BodyHeading>
          </Outer>
        </Background>
      </TouchableOpacity>
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

export default WalletTotalBalance;
