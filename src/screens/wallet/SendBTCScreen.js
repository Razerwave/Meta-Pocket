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
  let pattern = /[^0-9]/g;

  const handleChangeUid = event => {
    if (!pattern.test(event)) {
      setError(true);
      return;
    }
    setUid(event);
  };

  const handleChangeQuantity = event => {
    setQuantity(event);
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
            />
            <CustomInput
              value={quantity}
              onChange={event => handleChangeQuantity(event)}
              placeholder="Quantity"
              keyboardType="numeric"
              onPress
              btnText="Max"
              action
              error={false}
            />

            <View>
              <BodyText style={{marginBottom: 10}}>Optional</BodyText>
              <CustomInput
                value={memo}
                onChange={event => handleChangeMemo(event)}
                placeholder="Memo"
                action
                error={true}
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
