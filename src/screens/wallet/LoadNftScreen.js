import React, {useState} from 'react';
import {ButtonPrimary, CustomInput, LayoutScreen} from '../../components';
import styled from 'styled-components/native';
import {ROUTES} from '../../constants';

const LoadNftScreen = ({navigation}) => {
  const [contact, setContact] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [error, setError] = useState(false);

  const handleChangeContact = event => {
    console.log('handleChangeContact', event);
  };

  const handleChangeQuantity = event => {
    console.log('handleChangeQuantity', event);
  };

  return (
    <LayoutScreen>
      <Container>
        <Content>
          <Wrapper>
            <CustomInput
              value={contact}
              onChange={event => handleChangeContact(event)}
              placeholder="Contract Address"
              onPress
              btnText="Paste"
              action
            />
            <CustomInput
              value={tokenId}
              onChange={event => handleChangeQuantity(event)}
              placeholder="Token ID"
              keyboardType="numeric"
              onPress
              btnText="Max"
              action
              error={false}
            />
          </Wrapper>
        </Content>
        <ButtonContainer>
          <ButtonPrimary
            title="Load"
            onPress={() => navigation.navigate(ROUTES.WALLET.NFT_SEND, {
              data: {}
            })}
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
export default LoadNftScreen;
