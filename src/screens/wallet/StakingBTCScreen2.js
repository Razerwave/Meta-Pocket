import {View, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {
  ActionInfoBorder,
  BodyHeading,
  BodyText,
  ButtonPrimary,
  LayoutScreen,
  Stack,
} from '../../components';
import {neutral100} from '../../constants/colors';
import {ROUTES} from '../../constants';
import {useAuth} from '../../context/AuthContext';
const StakingBTCScreen2 = ({route, navigation}) => {
  const {i18n} = useAuth();
  const item = route.params.stacking;

  return (
    <LayoutScreen>
      <Container>
        <ActionInfoBorder style={{flex: 0.8, justifyContent: 'space-evenly'}}>
          <Stack
            direction="row"
            spacing={27}
            style={{justifyContent: 'center'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                <Image source={item.image} style={{width: 30, height: 30}} />
                <BodyHeading type={7}>
                  {item.percent} <BodyText type={3}>{item.name}</BodyText>
                </BodyHeading>
              </View>
              <BodyText
                color={neutral100}
                type={3}
                style={{alignSelf: 'center'}}>
                ≈ $12,345
              </BodyText>
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
                    <BodyText type={4}>0x333lksdf..sdflEDFWe</BodyText>
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
            title={i18n.stacking}
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

export default StakingBTCScreen2;
