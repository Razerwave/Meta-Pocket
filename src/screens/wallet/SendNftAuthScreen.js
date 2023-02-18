import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components/native';

import {
  LayoutScreen,
  BodyText,
  ButtonPrimary,
  ActionInfoBorder,
  Stack,
  BodyHeading,
} from '../../components';
import {ROUTES} from '../../constants';
import {neutral100} from '../../constants/colors';
import {useAuth} from '../../context/AuthContext';

const SendNftAuthScreen = ({navigation, route}) => {
  const {i18n} = useAuth();
  const data = route.params.to || '';
  const nft = route.params.nft || {};

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
                    <BodyText type={6}>{i18n.from}</BodyText>
                    <BodyText type={4}>0xe34lkjds....7BEsdlkfjls</BodyText>
                  </Content>
                  <Content>
                    <BodyText type={6}>{i18n.to}</BodyText>
                    <BodyText type={4}>{data}</BodyText>
                  </Content>
                </View>
                <DividerDotted />
              </Section>

              <Section>
                <Content>
                  <BodyText type={6}>{i18n.fee}</BodyText>
                  <BodyText type={4}>0.0001 BTC (≈$0.1)</BodyText>
                </Content>
              </Section>

              <Section>
                <DividerDotted />
                <Content>
                  <BodyText type={6}>{i18n.total}</BodyText>
                  <BodyText type={4}>$200.1</BodyText>
                </Content>
              </Section>
            </View>
          </Wrapper>
        </ActionInfoBorder>
        <ButtonContainer>
          <ButtonPrimary
            title={i18n.send}
            onPress={() => navigation.navigate(ROUTES.WALLET.HOME)}
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
