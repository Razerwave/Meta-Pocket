import React, {useState} from 'react';
import {View, Image} from 'react-native';
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

const SendNftAuthScreen = ({navigation, route}) => {
  const [uid, setUid] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [memo, setMemo] = useState('');
  const [error, setError] = useState(false);
  const data = route.params.to || {};
  const nft = route.params.nft || {};
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
          <Stack
            direction="row"
            spacing={27}
            style={{justifyContent: 'space-evenly'}}>
            <Image source={nft.image} style={{width: 110, height: 110}} />
            <View style={{alignItems: 'center'}}>
              <BodyHeading type={4}>{nft.type}</BodyHeading>
              <BodyText type={3}>#{nft.code}</BodyText>
            </View>
          </Stack>
          <Wrapper>
            <View style={{gap: 30, justifyContent: 'space-around'}}>
              <Section>
                <DividerDotted />
                <View style={{gap: 10}}>
                  <Content>
                    <BodyText type={6}>From</BodyText>
                    <BodyText type={4}>0xe34lkjds....7BEsdlkfjls</BodyText>
                  </Content>
                  <Content>
                    <BodyText type={6}>To</BodyText>
                    <BodyText type={4}>{data}</BodyText>
                  </Content>
                </View>
                <DividerDotted />
              </Section>

              <Section>
                <Content>
                  <BodyText type={6}>Fee</BodyText>
                  <BodyText type={4}>0.0001 BTC (≈$0.1)</BodyText>
                </Content>
              </Section>

              <Section>
                <DividerDotted />
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
            title="Send"
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
  height: auto;
  margin-left: 23px;
  margin-right: 23px;
  justify-content: space-around;
  flex: 1;
`;

const Wrapper = styled.View`
  gap: 18px;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 7px;
  padding-right: 7px;
`;

const Section = styled.View`
  gap: 20px;
  padding-left: 23px;
  padding-right: 23px;
  justify-content: center;
`;

const DividerDotted = styled.View`
  border-color: ${neutral100};
  border-style: dashed;
  border-width: 1px;
  flex: 1;
`;

export default SendNftAuthScreen;
