import styled from 'styled-components/native';
import bg from '../assets/images/wallet-total-balance-bg.png';
import BodyHeading from './texts/BodyHeading';
import BodyText from './texts/BodyText';
import { TouchableOpacity } from 'react-native'
import { currency } from '../utils/formats';
import { useAuth } from '../context/AuthContext';

const WalletTotalBalance = ({ total, onPress }) => {
  const { i18n } = useAuth()
  return (
    <Wrapper>
      <TouchableOpacity onPress={onPress} disabled={!onPress}>
        <Background source={bg}>
          <Outer>
            <BodyText type={5}>{i18n.totalValue}</BodyText>
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
