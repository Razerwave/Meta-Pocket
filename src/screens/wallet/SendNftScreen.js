import React, {useState} from 'react';
import {
  ButtonPrimary,
  CustomInput,
  ErrorText,
  LayoutBottom,
  LayoutScreen,
} from '../../components';
import styled from 'styled-components/native';
import {ROUTES} from '../../constants';
import {useAuth} from '../../context/AuthContext';

const SendNftScreen = ({navigation, route}) => {
  const [uid, setUid] = useState(0);
  const [error, setError] = useState(false);
  const data = route.params.Nftdata;
  const {i18n} = useAuth();
  let pattern = /[^0-9]/g;

  const handleChangeContact = event => {
    setUid(event);
    if (!pattern.test(event) && event.length == 10) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleNavigate = () => {
    !error &&
      navigation.navigate(ROUTES.WALLET.NFT_SEND_AUTH, {
        to: uid,
        nft: data,
      });
  };

  return (
    <LayoutScreen>
      <Container>
        <Content>
          <Wrapper>
            <CustomInput
              value={uid}
              onChange={event => handleChangeContact(event)}
              placeholder={i18n.addressOrUID}
              onPress
              btnText={i18n.paste}
              action
              error={error}
            />
            {error && <ErrorText>{i18n.addressOrUID}</ErrorText>}
          </Wrapper>
        </Content>
      </Container>
      <LayoutBottom type={2}>
        <ButtonPrimary title={i18n.next} onPress={() => handleNavigate()} />
      </LayoutBottom>
    </LayoutScreen>
  );
};
const ButtonContainer = styled.View`
  align-items: center;
  margin-bottom: 37px;
`;

const Container = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: space-between;
`;

const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Wrapper = styled.View`
  gap: 16px;
`;
export default SendNftScreen;
