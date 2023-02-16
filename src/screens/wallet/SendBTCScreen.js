import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {
  CustomInput,
  LayoutScreen,
  BodyText,
  ButtonPrimary,
  ErrorText,
  Precautions,
} from '../../components';
import {ROUTES} from '../../constants';

const SendBTCScreen = ({navigation}) => {
  const [uid, setUid] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [memo, setMemo] = useState('');
  const [error, setError] = useState(false);
  const [errorQuantity, setErrorQuantity] = useState(false);
  let pattern = /[^0-9]/g;
  let balance = 1900;
  const handleChangeUid = event => {
    setUid(event);
    if (!pattern.test(event) && event.length == 10) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChangeQuantity = event => {
    setQuantity(event);
    if (!pattern.test(event) && balance > event) {
      setErrorQuantity(false);
    } else {
      setErrorQuantity(true);
    }
  };

  const handleChangeMemo = event => {
    setMemo(event);
  };
  return (
    <LayoutScreen>
      <Container>
        <Content>
          <Wrapper>
            <CustomInput
              value={uid}
              onChange={event => handleChangeUid(event)}
              placeholder="Address or UID"
              onPress
              btnText="Paste"
              action
              error={error}
            />
            {error && <ErrorText>Address or UID valid</ErrorText>}
            <CustomInput
              value={quantity}
              onChange={event => handleChangeQuantity(event)}
              placeholder="Quantity"
              keyboardType="numeric"
              onPress
              btnText="Max"
              action
              error={errorQuantity}
            />
            {errorQuantity && <ErrorText>Insufficient funds</ErrorText>}
            <View>
              <BodyText style={{marginBottom: 10}}>Optional</BodyText>
              <CustomInput
                value={memo}
                onChange={event => handleChangeMemo(event)}
                placeholder="Memo"
                action
              />
            </View>
          </Wrapper>

          <Precautions />
        </Content>
        <ButtonContainer>
          <ButtonPrimary
            title="Next"
            onPress={() => navigation.navigate(ROUTES.ACTION.ACTION_SCREEN)}
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
`;

const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Wrapper = styled.View`
  gap: 16px;
`;
export default SendBTCScreen;
