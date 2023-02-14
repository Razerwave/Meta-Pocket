import React, {useState} from 'react';
import {View} from 'react-native-animatable';
import {IconSendBTCScreen} from '../../assets/icons';
import {neutral100} from '../../constants/colors';
import styled from 'styled-components/native';

import {
  CustomInput,
  LayoutScreen,
  BodyText,
  Stack,
  Divider,
  ButtonPrimary,
  ErrorText,
} from '../../components';

const SendBTCScreen = () => {
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
          <Stack spacing={16}>
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
          </Stack>

          <Stack padding={11}>
            <Section>
              <View>
                <IconSendBTCScreen />
              </View>
              <BodyText>Precautions</BodyText>
              <DividerContainer>
                <Divider></Divider>
              </DividerContainer>
            </Section>
            <BodyText style={{color: neutral100}}>
              When the withdrawal request is submitted, the assets to be
              transferred will be frozen during processing. Deduction of the
              assets from your balance will occur after the transaction have
              been completed.
            </BodyText>
          </Stack>
        </Content>
        <ButtonContainer>
          <ButtonPrimary title="Next" />
        </ButtonContainer>
      </Container>
    </LayoutScreen>
  );
};

const DividerContainer = styled.View`
  flex: 1;
`;
const Section = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 8px;
  margin-bottom: 10px;
  align-items: center;
`;

const ButtonContainer = styled.View`
  align-items: center;
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
export default SendBTCScreen;
