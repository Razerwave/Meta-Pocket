import React, {useState} from 'react';
import {ButtonPrimary, CustomInput, LayoutScreen} from '../../components';
import styled from 'styled-components/native';
import {ROUTES} from '../../constants';

const SendNftScreen = ({navigation, route}) => {
  const [uid, setUid] = useState('');
  const [error, setError] = useState(false);
  const data = route.params.Nftdata;
  console.log(data, ' 0000');
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
              placeholder="Address or UID"
              onPress
              btnText="Paste"
              action
            />
          </Wrapper>
        </Content>
        <ButtonContainer>
          <ButtonPrimary
            title="Next"
            onPress={() =>
              navigation.navigate(ROUTES.SENDNFT_AUTH.SENDNFT_AUTH_SCREEN, {
                to: uid,
                nft: data,
              })
            }
          />
        </ButtonContainer>
      </Container>
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
