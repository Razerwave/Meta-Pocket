import React, {useState} from 'react';
import {
  ButtonPrimary,
  CustomInput,
  ErrorText,
  LayoutScreen,
} from '../../components';
import styled from 'styled-components/native';
import {ROUTES} from '../../constants';

const LoadNftScreen = ({navigation}) => {
  const [contact, setContact] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [error, setError] = useState(false);
  const [errorTokenId, setErrorTokenId] = useState(false);
  const [errorContact, setErrorContact] = useState(false);
  let pattern = /[^0-9]/g;
  const balance = 1500;
  const handleChangeContact = event => {
    setContact(event);
    if (event.length == 10) {
      setErrorContact(false);
    } else {
      setErrorContact(true);
    }
  };

  const handleChangeTokenId = event => {
    setTokenId(event);
    if (!pattern.test(event) && balance > event) {
      setErrorTokenId(false);
    } else {
      setErrorTokenId(true);
    }
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
              error={errorContact}
            />
            {errorContact && <ErrorText>invalid messeage</ErrorText>}

            <CustomInput
              value={tokenId}
              onChange={event => handleChangeTokenId(event)}
              placeholder="Token ID"
              keyboardType="numeric"
              onPress
              btnText="Max"
              action
              error={errorTokenId}
            />
            {errorTokenId && <ErrorText>invalid messeage</ErrorText>}
          </Wrapper>
        </Content>
        <ButtonContainer>
          <ButtonPrimary
            title="Load"
            onPress={() =>
              navigation.navigate(ROUTES.WALLET.NFT_SEND, {
                data: {},
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
export default LoadNftScreen;
