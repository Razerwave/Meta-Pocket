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
  ActionInfoBorder,
  Stack,
  BodyHeading,
  FixedThemeWrapper,
} from '../../components';
import {ROUTES} from '../../constants';
import {neutral100} from '../../constants/colors';

const SendNftAuthScreen = ({navigation}) => {
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
        <ActionInfoBorder style={{flex: 0.8, justifyContent: 'space-evenly'}}>
          <Stack style={{alignItems: 'center'}}>
            <BodyHeading type={7}>0.3 BTC</BodyHeading>
            <BodyText type={3}>≈ $12,345</BodyText>
          </Stack>
          <Wrapper>
            <View style={{gap: 30, justifyContent: 'space-around'}}>
              <Section>
                <DividerDotted />
                {/* <Content>
                <BodyText type={6}>Name</BodyText>
                <BodyText type={4}>Shoes #748</BodyText>
              </Content> */}
                <View style={{gap: 10}}>
                  <Content>
                    <BodyText type={6}>From</BodyText>
                    <BodyText type={4}>0xe34lkjds....7BEsdlkfjls</BodyText>
                  </Content>
                  <Content>
                    <BodyText type={6}>To</BodyText>
                    <BodyText type={4}>0x333lksdf..sdflEDFWe</BodyText>
                  </Content>
                </View>
              </Section>

              <DividerDotted />

              <Section>
                <Content>
                  <BodyText type={6}>Fee</BodyText>
                  <BodyText type={4}>0.0001 BTC (≈$0.1)</BodyText>
                </Content>
              </Section>

              <DividerDotted />

              <Section>
                <Content>
                  <BodyText type={6}>Total</BodyText>
                  <BodyText type={4}>$200.1</BodyText>
                </Content>
              </Section>
            </View>
          </Wrapper>
        </ActionInfoBorder>
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
  gap: 30px;
  height: auto;
  margin-left: 23px;
  margin-right: 23px;
  justify-content: space-around;
  border-width: 2px;
  flex: 1;
`;

// const Content = styled.View`
//   flex: 1;
//   justify-content: space-between;
//   margin-bottom: 50px;
// `;

const Wrapper = styled.View`
  gap: 16px;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Section = styled.View`
  gap: 20px;
  padding-left: 7px;
  padding-right: 7px;
  justify-content: center;
`;
const DividerDotted = styled.View`
  border-color: ${neutral100};
  border-style: dashed;
  border-width: 0.8px;
  flex: 1;
`;
export default SendNftAuthScreen;
