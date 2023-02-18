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
import {useAuth} from '../../context/AuthContext';

const SendBTCScreen = ({navigation, route}) => {
  const [uid, setUid] = useState('');
  const [quantity, setQuantity] = useState('');
  const [memo, setMemo] = useState('');
  const [error, setError] = useState(false);
  const [errorQuantity, setErrorQuantity] = useState(false);
  const {i18n} = useAuth();
  const item = route.params.item;
  console.log(item);
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

  const handleNavigate = () => {
    if (!uid || !quantity) {
      setError(true);
      setErrorQuantity(true);
      return;
    }
    !error &&
      !errorQuantity &&
      navigation.navigate(ROUTES.WALLET.BTC_SEND_AUTH, {
        uid,
        quantity,
        memo,
        item,
      });
  };
  return (
    <LayoutScreen>
      <Container>
        <Content>
          <Wrapper>
            <CustomInput
              value={uid}
              onChange={event => handleChangeUid(event)}
              placeholder={i18n.addressOrUID}
              onPress
              btnText={i18n.paste}
              action
              error={error}
            />
            {error && <ErrorText>{i18n.addressOrUID}</ErrorText>}
            <CustomInput
              value={quantity}
              onChange={event => handleChangeQuantity(event)}
              placeholder={i18n.quantity}
              keyboardType="numeric"
              onPress
              btnText={i18n.max}
              action
              error={errorQuantity}
            />
            {errorQuantity && <ErrorText>{i18n.insufficientFunds}</ErrorText>}
            <View>
              <BodyText style={{marginBottom: 10}}>{i18n.optional}</BodyText>
              <CustomInput
                value={memo}
                onChange={event => handleChangeMemo(event)}
                placeholder={i18n.memo}
                action
              />
            </View>
          </Wrapper>

          <Precautions />
        </Content>
        <ButtonContainer>
          <ButtonPrimary title={i18n.next} onPress={() => handleNavigate()} />
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
