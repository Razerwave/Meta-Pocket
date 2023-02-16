import React, {useState} from 'react';
import {
  ButtonPrimary,
  CustomInput,
  LayoutBottom,
  LayoutScreen,
} from '../../components';
import styled from 'styled-components/native';
import {ROUTES} from '../../constants';
import {useAuth} from '../../context/AuthContext';

const SendNftScreen = ({navigation, route}) => {
  const [uid, setUid] = useState('');
  const [error, setError] = useState(false);
  const data = route.params.Nftdata;
  const {i18n} = useAuth();
  const handleChangeContact = event => {
    console.log('handleChangeContact', event);
    setUid(event);
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
            />
          </Wrapper>
        </Content>
      </Container>
      <LayoutBottom type={2}>
        <ButtonPrimary
          title={i18n.next}
          onPress={() =>
            navigation.navigate(ROUTES.WALLET.NFT_SEND_AUTH, {
              to: uid,
              nft: data,
            })
          }
        />
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
